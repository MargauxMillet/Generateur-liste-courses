import { Fragment } from "react";
import recipes from "../../data/recipes.json"
import style from "./index.module.css"
import RecipeCard from "../../components/RecipeCard";

function RecipeBook () {
    // TODO : ajouter un + et faire le form pour ajouter une recette
    return (
        <Fragment>
            <h1 className={style.title}>Mon livre de recettes</h1>
            <ul className={style.recipesList}>
                {recipes.map((recipe, index)=>{
                    return (
                        <RecipeCard key={`${index}-${recipe.id}`} recipe={recipe} />
                    )
                })}
            </ul>
        </Fragment>
    )
}

export default RecipeBook