import React from "react";

function Recipe({ title, calories, image, ingredients }) {
  return (
    <>
      <div className="recipe-container">
        <div className="left-side">
          <img src={image} alt="" />
        </div>
        <div className="right-side">
          <h3>{title}</h3>
          <p>{calories.toFixed(2)} cal</p>
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Recipe;
