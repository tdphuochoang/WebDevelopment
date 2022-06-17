import supertest from "supertest";
import createServer from "../utils/server.js";
// import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";
import connect from "../utils/mongooseCon.js";
dotenv.config();

const app = createServer();

jest.setTimeout(30000);

beforeAll(async () => {
  await connect();
});
// beforeEach(() => {
//   jest.resetModules();
// });

//REGISTER
describe("#user", () => {
  test("Register a user", async () => {
    const res = await supertest(app)
      .post("/register")
      .send({
        username: "ronaldo",
        email: "ronaldo@gmail.com",
        password: "ronaldo123",
      })
      .expect(200);
  });
  // afterAll(async () => {
  //   await User.deleteMany();
  // });
  describe("#handleSignUp", () => {
    describe("should not register user", () => {
      describe("when email already exists", () => {
        test("return success false", async () => {
          const response = await supertest(app)
            .post("/register")
            .send({
              username: "hoang",
              email: "hoang@gmail.com",
              password: "hoang123",
            })
            .expect(403);
          expect(response.body.message).toBe("User already exists");
        });
      });
    });
    // describe("should create user", () => {
    //   describe("when details is valid", () => {
    //     test("should return success true", async () => {
    //       const res = await supertest(app)
    //         .post("/register")
    //         .send({
    //           username: "ronaldo",
    //           email: "ronaldo@gmail.com",
    //           password: "ronaldo123",
    //         })
    //         .expect(200);
    //       expect(res.body.message).toBe("Account created successfully!");
    //       expect(res.body.user.username).toBe("ronaldo");
    //       expect(res.body.user.email).toBe("ronaldo@gmail.com");
    //     });
    //   });
    // });
  });
});

//LOGIN
test("User should log in successfully", async () => {
  jest.setTimeout(30000);
  const response = await supertest(app)
    .post("/login")
    .send({
      email: "hoang@gmail.com",
      password: "hoang123",
    })
    .expect(200);
  expect(response.body.message).toBe("Successfully Logged In");
});

//UPDATE USER's INFO
test("User's info should be updated", async () => {
  const user_id = "62a51f674f10d3dd243a385e";
  const response = await supertest(app)
    .post(`/user/${user_id}`)
    .send({
      username: "hoang",
      password: "hoang123",
    })
    .expect(200);
  expect(response.body.message).toBe("Updated successfully!");
});

//FOLLOWED ARTIST
// test("User follows an artist", async () => {
//   jest.setTimeout(30000);
//   const artist_name = "Justin Bieber";
//   const response = await supertest(app)
//     .post(`/artist/${artist_name}`)
//     .send()
//     .expect(200);
//   expect(response.body.message).toBe(`You followed ${artist_name}`);
// });

// test("Should register for a user", async () => {
//   const response = await supertest(app)
//     .post("/register")
//     .send({
//       username: "test",
//       email: "test@gmail.com",
//       password: "test123",
//     })
//     .expect(200);
// });
