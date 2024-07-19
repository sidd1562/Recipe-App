
import style from '../../css/item.module.css'

export default function Item({ item }) {
  return (
    <div>
      <div className={style.itemContainer}>
        <div className={style.imageContainer}>
          <img className={style.Image}
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
            alt=""
          />
        </div>

        <div className={style.nameContainer}>
          <div className={style.name}>{item.name}</div>
          <div className={style.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
