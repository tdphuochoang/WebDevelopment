import supertest from "supertest";
import createServer from "../utils/server.js";
import connect from "../utils/mongooseCon.js";

const app = createServer();

beforeAll(async () => {
  await connect();
});

// beforeEach(() => {
//   jest.resetModules();
// });

//Test create songs
test("Song should be created", async () => {
  jest.setTimeout(30000);
  const response = await supertest(app)
    .post("/songs")
    .send({
      name: "That's Hilarious",
      artist: "Charlie Puth",
      language: "English",
      category: "Pop R&B",
    })
    .expect(201);
});

//Liked songs
test("Song should be liked", async () => {
  jest.setTimeout(30000);
  const id = "62a62e17d08394dde6c1a7af";
  const response = await supertest(app).post(`/songs/${id}`).send().expect(200);
  expect(response.body.message).toBe("Song is added to your liked list");
});

//Display all liked songs
test("Displayed all liked songs", async () => {
  jest.setTimeout(30000);
  const response = await supertest(app).get("/songs").send().expect(200);
});

//Search song based on languages
test("Search Song based on language", async () => {
  jest.setTimeout(30000);
  const language = "Chinese";
  const response = await supertest(app)
    .get(`/songs?language=${language}`)
    .send()
    .expect(200);
});

//Search song based on category
test("Search Song based on category", async () => {
  jest.setTimeout(30000);
  const category = "rock";
  const response = await supertest(app)
    .get(`/songs/${category}`)
    .send()
    .expect(200);
});
