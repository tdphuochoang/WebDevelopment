import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (name) => {
    const api_key = process.env.REACT_APP_KEY;
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${name}`;
    axios.get(url).then((response) => {
      const recipes = response.data;
      setSearchedRecipes(recipes.results);
    });
  };
  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
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

export default Searched;
