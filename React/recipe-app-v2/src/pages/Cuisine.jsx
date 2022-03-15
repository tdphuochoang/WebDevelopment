import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  const getCuisine = async (name) => {
    const api_key = process.env.REACT_APP_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&cuisine=${name}`;
    axios.get(url).then((response) => {
      const recipes = response.data;
      setCuisine(recipes.results);
    });
  };

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 5rem;
`;

const Card = styled.div`
  min-height: 10rem;
  min-width: 15rem;
  border-radius: 2rem;
  oveflow: hidden;
  position: relative;
  background: red;
  img {
    width: 100%;
    border-radius: 2rem;
    position: absolute;
    left: 0;
    height: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
