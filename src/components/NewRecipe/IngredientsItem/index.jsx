import style from "./index.module.css"
import ingredients from "../../../data/ingredients.json"
import { useEffect, useState } from "react"
import arrow from "../../../assets/arrow.svg"

function IngredientsItem ({tempIngredientsList, setTempIngredientsList, index}) {
    const [isSelectIngredientOpen, setIsSelectIngredientOpen] = useState(false)

    const [isQuantityError, setIsQuantityError] = useState(false)
    const [isIngredientError, setIsIngredientError] = useState(false)

    function handleIngredientsListChange (index, type, value) {
        const updatedTempIngredientsList = [...tempIngredientsList]
        type == "ingredient" ? 
            (
                updatedTempIngredientsList[index][0] = value, 
                setIsIngredientError(false)
            )
        : type == "quantity" ? 
            (
                updatedTempIngredientsList[index][1] = value,
                value <= 0 
                    ? setIsQuantityError(true)
                    : setIsQuantityError(false)
            )
        : ""
        
        setTempIngredientsList(updatedTempIngredientsList)
    }

    // If the user adds a new row while the last row was empty (no ingredient selected), it creates an error
    if (index != 0 && tempIngredientsList[index-1][0] == "ingrédient") {
        const updatedTempIngredientsList = [...tempIngredientsList]
        updatedTempIngredientsList[index-1][0] = "error"
        setTempIngredientsList(updatedTempIngredientsList)
    }
    useEffect (()=>{
        if (tempIngredientsList[index][0] == "error") {
            setIsIngredientError(true)
        }
    }, [tempIngredientsList])

    return (
        <div className={`${isQuantityError ? "newRecipeError" : ""} ${isIngredientError ? `${style.ingredientError}` : ""}`} >
            {
                (isQuantityError || isIngredientError) &&
                <div className={`newRecipeError ${style.errorsContainer}`}>
                    {isQuantityError && <p>La quantité doit être supérieure à 0</p>}
                    {isIngredientError && <p>Un ingrédient doit être sélectionné</p>}
                </div> 
            }
            <div className={style.ingredientsRow}>
                <div className={style.quantity}>
                    <label htmlFor="quantity" className="newRecipeRequired">Quantité</label>
                    <input 
                        type="number" 
                        name="quantity" 
                        id="quantity" 
                        placeholder="..." 
                        onInput={(e)=>handleIngredientsListChange (index, "quantity", e.target.value)} 
                    />
                </div>
                <div className={style.ingredient}>
                    <label htmlFor="ingredient" className="newRecipeRequired">Ingrédient</label>
                    <div>
                        <div 
                            className={`
                                ${style.selectIngredient} 
                                ${(tempIngredientsList[index][0] == "ingrédient" || tempIngredientsList[index][0] == "error") 
                                    ? style.placeholder 
                                    : ""
                                } 
                                ${isSelectIngredientOpen ? style.selectIngredientOpen : ""}
                            `} 
                            onClick={()=>setIsSelectIngredientOpen(!isSelectIngredientOpen)}
                        >
                            <p>{tempIngredientsList[index][0] == "error" ? "ingrédient" : tempIngredientsList[index][0]}</p>
                            <img src={arrow} alt="" className={style.arrow} />
                        </div>
                        {
                            isSelectIngredientOpen &&
                            <div className={style.selectIngredientOptions}>
                                {ingredients.map((item)=>{
                                    return (
                                        <div 
                                            key={item.id} 
                                            onClick={()=>{
                                                handleIngredientsListChange(index, "ingredient", item.name); 
                                                setIsSelectIngredientOpen(false)
                                            }}
                                        >
                                            {item.name}
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
                <div className={style.unit}>
                    {ingredients.map((item)=> {
                        if (item.name == tempIngredientsList[index][0]) {
                            return (
                                item.simpleUnit 
                                    ? `(${item.simpleUnit})` 
                                    : item.unit !== "" ? `(${item.unit})` : ""
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default IngredientsItem