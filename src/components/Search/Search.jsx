import { useEffect, useState } from "react";
import style from "../../css/search.module.css";
const URL = `https://api.spoonacular.com/recipes/complexSearch`;
const API_KEY = `73d282942a3e45979aa563e2fc1e6d77`;

export default function Search({ recipeData, setRecipeData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setRecipeData(data.results);
    }
    fetchRecipe();
  }, [query]);

  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
