import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <Container>
      <Slink to={"/cuisine/Americans"}>
        <FaPizzaSlice />
        <h4>Americans</h4>
      </Slink>
      <Slink to={"/cuisine/Korean"}>
        <FaHamburger />
        <h4>Korean</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </Slink>
      <Slink to={"/cuisine/Vietnamese"}>
        <GiChopsticks />
        <h4>Vietnamese</h4>
      </Slink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, black);
  width: 4.5rem;
  height: 4.5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.1rem;
  }

  &.active {
    background: linear-gradient(to right, #e6dada, #274046);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;
export default Category;
