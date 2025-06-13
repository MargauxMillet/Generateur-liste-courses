import { Fragment } from "react";
import recipes from "../../data/recipes.json"
import style from "./index.module.css"
import RecipeCard from "../../components/RecipeCard";
import { Link, useLocation } from "react-router-dom";

function RecipeBook () {
    const location = useLocation()
    return (
        <Fragment>
            <h1 className={style.title}>Mon livre de recettes</h1>
            {
                location.search == "?new=1" &&
                <div className={style.alertSuccess}>
                    <p>La nouvelle recette a bien été ajoutée</p>
                </div>
            }
            <ul className={style.recipesList}>
                {recipes.map((recipe, index)=>{
                    return (
                        <RecipeCard key={`${index}-${recipe.id}`} recipe={recipe} />
                    )
                })}
                <Link to="/nouvelle-recette">
                    <li className={style.newRecipe}>
                        <svg width="60" height="65" viewBox="0 0 60 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M58.7395 27.9034L60 35.5798H34.6639V64.5798L25.4622 64.0924V35.5798H1.0084L0 27.9034H25.4622V0L34.6639 0.365549V27.9034H58.7395Z"/>
                        </svg>
                    </li>
                </Link>
            </ul>
        </Fragment>
    )
}

export default RecipeBook