import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const api_key = process.env.REACT_APP_KEY;
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=9&tags=vegetarian`;

    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      axios.get(url).then((response) => {
        const my_data = response.data;

        localStorage.setItem("veggie", JSON.stringify(my_data.recipes));
        setVeggie(my_data.recipes);
        console.log(my_data);
      });
    }

    /*const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${api_key}&number=9&tags=vegetarian`
    );
    const data = await api.json();
    console.log(data);*/
  };
  return (
    <Wrapper>
      <h3>Veggie Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "2rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <BlackShadow />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 17rem;
  border-radius: 2rem;
  oveflow: hidden;
  position: relative;

  img {
    width: 100%;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 100;
    color: white;
    font-size: 16px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }
`;

const BlackShadow = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
