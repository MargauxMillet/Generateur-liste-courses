import { useContext, useEffect } from "react"
import style from "./index.module.css"
import { NewRecipeErrorContext } from "../../../context"

function Time ({time, setTime}) {
    const {addError, removeError} = useContext(NewRecipeErrorContext)
    const isError = time !== "..." && Number(time) <= 0

    useEffect(() => {
        if (Number(time) <= 0) {
            addError("time")
        } else {
            removeError("time")
        }
    },[time])

    return (
        <div className={`${style.time} ${isError ? "newRecipeError" : ""}`}>
            <h2>Préparation :</h2>
            <div>
                {isError && <p>La durée doit être supérieure à 0</p>}
                <div className={style.inputContainer}>
                    <input 
                        type="number" 
                        name="time" 
                        id="time" 
                        min={1} 
                        placeholder="..." 
                        value={time} 
                        onInput={(e)=>setTime(e.target.value)}
                    />
                    <label htmlFor="time" className="newRecipeRequired">minutes</label> 
                </div>
            </div>
        </div>
    )
}

export default Time