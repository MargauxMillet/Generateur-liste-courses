import style from "./index.module.css"

function TypeIngredientList ({title, list, imgUrl}) {
    return (
        <div className={style.typeItem}>
            <div className={style.titleContainer}>
                <div><img src={imgUrl} alt="" /></div>
                <p>{title}</p>
            </div>
            <ul className={style.listContainer}>
                {list.map((item, index) => {
                    const ingredient = (item.quantity > 1 && item.plural !== "") ? item.plural : item.ingredient
                    return (
                        <li key={index}>{item.quantity} {item.unit} {ingredient}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TypeIngredientList