import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [button, setButton] = useState('chicken');
  
  useEffect( () => {
    const appId = process.env.REACT_APP_RECIPE_API_ID;
    const appKey = process.env.REACT_APP_RECIPE_API_KEY;
    const getRecipes = async () => {
      const res = await fetch(`https://api.edamam.com/search?q=${button}&app_id=${appId}&app_key=${appKey}`) ;
      const data = await res.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [button]);
  

  const newSearch = e => {
    setSearch(e.target.value)
  };

  const getSearch = e => {
    e.preventDefault();
    setButton(search);
    setSearch('');
  };

  return (
    <div className="App">
      <h1 className="header">Ingredients for Food</h1>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" placeholder="Recipe for ..." value={search} onChange={newSearch} />
        <button className= "search-button" type="submit">search</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
