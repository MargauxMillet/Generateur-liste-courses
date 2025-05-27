import { Link } from "react-router-dom"
import style from "./index.module.css"

function RecipeCard ({recipe}) {
    return (
        <Link to={`/recette/${recipe.id}`}>
            <li className={style.recipeCard}>
                <p>{recipe.name}</p>
            </li>
        </Link>
    )
}

export default RecipeCard