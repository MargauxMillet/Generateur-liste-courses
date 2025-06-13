import { useContext, useEffect, useState } from "react"
import style from "./index.module.css"
import IngredientsItem from "../IngredientsItem"
import People from "../People"
import { NewRecipeErrorContext } from "../../../context"

function Ingredients ({people, setPeople, setIngredientsList}) {
    const {addError, removeError} = useContext(NewRecipeErrorContext)
    const [tempIngredientsList, setTempIngredientsList] = useState([["ingrédient", null]])
    const [ingredientsNumber, setIngredientsNumber] = useState(1)

    useEffect(()=>{
        const value = {}
        tempIngredientsList.map((item)=>{
            value[item[0]] = item[1]
        })
        setIngredientsList(value)
    }, [tempIngredientsList])

    useEffect(() => {
        let ingredientsError = false
        tempIngredientsList.map((item) => {
            ((item[0] == "error" || item[0] == "ingrédient") || (item[1] <= 0)) ? ingredientsError = true : ""
        })
        if (ingredientsError) {
            addError("ingredients")
        } else {
            removeError("ingredients")
        }
    },[tempIngredientsList])
    
    return (
        <div className={style.ingredientsContainer}>
            <h2>Ingrédients :</h2>
            <div className={style.infos}>
                <People people={people} setPeople={setPeople}/>
                <div>
                    {Array.from({ length: ingredientsNumber }).map((_, index) => (
                        <IngredientsItem key={index} tempIngredientsList={tempIngredientsList} setTempIngredientsList={setTempIngredientsList} index={index} />
                    ))}
                    <div className={`newRecipeButtonsQuant ${style.buttonsContainer}`}>
                        <button 
                            onClick={(e)=>{
                                e.preventDefault(); 
                                setIngredientsNumber(ingredientsNumber - 1); 
                                setTempIngredientsList(tempIngredientsList.slice(0, -1))}
                            } 
                            disabled={ingredientsNumber == 1}
                        >
                            <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6447 0L15 3H0.355263L0 0H14.6447Z"/>
                            </svg>
                        </button>
                        <button 
                            onClick={(e)=>{
                                e.preventDefault(); 
                                setIngredientsNumber(ingredientsNumber + 1); 
                                setTempIngredientsList([...tempIngredientsList, ["ingrédient", null]])}
                            }
                        >
                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7269 6.04906L13 7.71321H7.5105V14L5.51681 13.8943V7.71321H0.218487L0 6.04906H5.51681V0L7.5105 0.0792458V6.04906H12.7269Z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ingredients