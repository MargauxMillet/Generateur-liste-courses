import { useState } from "react"
import RowRecipesChoice from "../RowRecipesChoice"
import recipes from "../../data/recipes.json"
import style from "./index.module.css"
import peopleIcon from "../../assets/peopleIcon.svg"
import recipeIcon from "../../assets/recipeIcon.svg"
import quantityIcon from "../../assets/quantityIcon.svg"

function RecipesChoice ({setContent, setGroceryList}) {
    const [rowsNumber, setRowsNumber] = useState(2)

    const [recipesList, setRecipesList] = useState(
        Array.from({length: rowsNumber}, ()=> ({people: "2", recipe: "", quantity: "1"}))
    )

    function UpdateGroceryList () {
        let updatedList = []
        recipesList.map((item)=> {
            recipes.map((recipe)=>{
                if (recipe.id == item.recipe) {
                    Object.entries(recipe.ingredients).map((ingredient)=>{
                        // Look for ingredients already in the list to avoid duplicates
                        const ingredientAlreadyPresent = updatedList.find(
                            (existingIngredient) => ingredient[0] == existingIngredient.ingredient
                        )

                        if (ingredientAlreadyPresent) {
                            ingredientAlreadyPresent.quantity += ingredient[1] * item.people * item.quantity
                        } else {
                            updatedList.push({ingredient: ingredient[0], quantity: ingredient[1] * item.people * item.quantity})
                        }
                    })
                }
            })
        })
        setGroceryList(updatedList)
    }

    return (
        <div className={style.container}>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><img src={peopleIcon} alt="Number of people" /></td>
                            <td><img src={recipeIcon} alt="Name of recipe" /></td>
                            <td><img src={quantityIcon} alt="Quantity" /></td>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: rowsNumber }).map((_, index) => (
                            <RowRecipesChoice key={index} id={index} recipesList={recipesList} setRecipesList={setRecipesList} />
                        ))}
                    </tbody>
                </table>
                <div className={style.rowsButtonsContainer}>
                    <button className={style.minusButton} onClick={()=>{setRowsNumber(rowsNumber - 1); setRecipesList(recipesList.slice(0,-1)) }} disabled={rowsNumber <= 1}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15"/>
                            <path d="M13.6024 16.3976H5.21729V13.6026H13.6024L16.3974 13.6025L24.7825 13.6026V16.3976H16.3974H13.6024Z"/>
                        </svg>
                    </button>
                    <button className={style.plusButton} onClick={()=>{setRowsNumber(rowsNumber + 1); setRecipesList([...recipesList, {people: 2, recipe: "", quantity: 1}])}}>
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15"/>
                            <path d="M13.6024 16.3974H5.21729V13.6024H13.6024V5.21729H16.3974V13.6024H24.7825V16.3974H16.3974V24.7825H13.6024V16.3974Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <button className="button" onClick={()=>{setContent("groceries"); UpdateGroceryList()}}>Générer ma liste</button>
        </div>
    )
}

export default RecipesChoice