import { useContext, useEffect } from "react"
import style from "./index.module.css"
import { NewRecipeErrorContext } from "../../../context"

function People ({people, setPeople}) {
    const {addError, removeError} = useContext(NewRecipeErrorContext)
    const isError = people !== "..." && Number(people) <= 0

    useEffect(() => {
        if (Number(people) <= 0) {
            addError("people")
        } else {
            removeError("people")
        }
    },[people])

    return (
        <div className={`${style.people} ${isError && "newRecipeError"}`}>
            {isError && <p>Le nombre de personnes doit être supérieur à 0</p>}
            <div className={style.inputContainer}>
                <input 
                    type="number" 
                    name="people" 
                    id="people" 
                    min={1} 
                    placeholder="..." 
                    value={people} 
                    onInput={(e)=>setPeople(e.target.value)}
                />
                <label htmlFor="people" className="newRecipeRequired">personne(s)</label> 
            </div>
        </div>
    )
}

export default People