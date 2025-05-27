import recipes from "../../data/recipes.json"
import style from "./index.module.css"
import arrow from "../../assets/arrow.svg"
import { useState } from "react"
import QuantityInput from "../QuantityInput"

function RowRecipesChoice ({recipesList, setRecipesList, id}) {

    const [people, setPeople] = useState(2)
    const [recipe, setRecipe] = useState("")
    const [quantity, setQuantity] = useState(1)

    const [isSelectOpen, setIsSelectOpen] = useState(false)
    
    function updateRecipesList(name, value, recipeName) {
        const updatedList = [...recipesList]
        updatedList.map((item, index)=>{
            if (index == id) {
                item[name] = value
            }
        })
        setRecipesList(updatedList)
        name == "people" ? setPeople(value) : name == "recipe" ? setRecipe(recipeName) : setQuantity(value) 
    }

    return (
        <tr>
            <td>
                <QuantityInput value={people} setValue={setPeople} name="people" updateRecipesList={updateRecipesList} />
            </td>
            <td>
                <div className={`${style.selectRecipe} ${isSelectOpen ? style.selectRecipeOpen : ""}`} onClick={()=>setIsSelectOpen(!isSelectOpen)}>
                    <p>{recipe == "" ? "Choisir ma recette" : recipe}</p>
                    <img src={arrow} alt="" />
                </div>
                {
                    isSelectOpen && 
                    <div className={style.selectRecipeOptions}>
                        {recipes.map((item)=>{
                            return <div key={item.id} onClick={(e)=>{updateRecipesList("recipe", item.id, item.name); setIsSelectOpen(false)}}>{item.name}</div>
                        })}
                    </div>
                }
            </td>
            <td>
                <QuantityInput value={quantity} setValue={setQuantity} name="quantity" updateRecipesList={updateRecipesList} />
            </td>
        </tr>
    )
}

export default RowRecipesChoice