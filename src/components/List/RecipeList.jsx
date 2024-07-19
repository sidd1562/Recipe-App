import RecipeItem from "../item/RecipeItem";

export default function RecipeList({ recipeData,setRecipeId }) {
  return (
    <div>
      {recipeData.map((food) => (
       <RecipeItem setRecipeId={setRecipeId} key={food.id} food={food}/>
      ))}
    </div>
  );
}
