import style from "../../css/recipe.module.css";

export default function RecipeItem({ food, setRecipeId }) {
  return (
    <div className={style.itemContainer}>
      <img className={style.itemImage} src={food.image} />
      <div className={style.itemContent}>
        <p className={style.itemName}> {food.title}</p>
      </div>
      <div className={style.buttonContainer}>
        <button
          onClick={() => {
            setRecipeId(food.id);
          }}
          className={style.itemButton}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
