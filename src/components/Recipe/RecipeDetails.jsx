import { useEffect, useState } from "react";

import style from "../../css/recipedetails.module.css";
import ItemList from "../View/ItemList";

export default function RecipeDetails({ recipeId }) {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${recipeId}/information`;
  const API_KEY = `73d282942a3e45979aa563e2fc1e6d77`;


  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setRecipe(data);
      setLoading(false);
    }
    fetchRecipe();
  }, [recipeId]);

  return (
    <div>
      <div className={style.recipeCard}>
        <h1 className={style.recipeName}>{recipe.title}</h1>
        <img className={style.recipeImage} src={recipe.image} />

        <div className={style.recipeDetails}>
          <span>
            <strong>⌚{recipe.readyInMinutes}Minutes</strong>
          </span>

          <span>
            <strong>Serves 👪{recipe.servings}</strong>
          </span>

          <span>
            <strong>
              {recipe.vegetarian ? "🟢Vegetarian" : "🔴Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{recipe.vegan ? "🍆Vegan" : "🦈 Non-Vegan"}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{recipe.pricePerServing / 100}Per Serving</strong>
          </span>
        </div>

        <h2>Ingredients</h2>

        <ItemList recipe={recipe} isLoading={isLoading} />

        <h2>Instructions</h2>
        <div className={style.recipeinstuctions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              recipe.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
