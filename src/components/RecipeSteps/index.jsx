import style from "./index.module.css"

function RecipeSteps({recipe}) {
    return (
        <div className={style.recipeStepsContainer}>
            <h2>Recette</h2>
            <ol>
                {Object.entries(recipe.steps).map(([step, toDo])=>{
                    return (
                        <li key={step}>
                            <h3>{step}.</h3>
                            <p>{toDo}</p>
                        </li>
                    )
                })} 
            </ol>
            
        </div>
    )
}

export default RecipeSteps