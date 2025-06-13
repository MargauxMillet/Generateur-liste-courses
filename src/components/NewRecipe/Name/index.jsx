import { useContext, useEffect } from "react"
import style from "./index.module.css"
import { NewRecipeErrorContext } from "../../../context"

function Name({name, setName}) {
    const {addError, removeError} = useContext(NewRecipeErrorContext)
    const isError = name !== 0 && name.length < 2

    useEffect(() => {
        if (name.length < 2) {
            addError("name")
        } else {
            removeError("name")
        }
    },[name])

    return (
        <div className={`${style.name} ${isError ? "newRecipeError" : ""}`}>
            <label htmlFor="name" className="newRecipeRequired">Titre</label>
            {isError && <p>Le titre est trop court</p>}
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={name !== 0 ? name : ""} 
                onChange={(e)=>setName(e.target.value)} 
                placeholder="Ajouter le nom de la recette" 
            />
        </div>
    )
}

export default Name