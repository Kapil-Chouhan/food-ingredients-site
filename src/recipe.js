import React from 'react';
import './recipe.css';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div className="recipe-container">
      <h2 className="recipe-title">{title}</h2>
      <img className="recipe-image" src={image} alt="" />
      <p className="recipe-calories">Calories : {calories}</p>
      <ul className="ingredient-list">
        {ingredients.map(ingredient => (
          <li className="ingredient-list-items">{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;