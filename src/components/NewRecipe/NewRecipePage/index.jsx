import { Fragment, useContext, useState } from "react"
import { NewRecipeErrorContext } from "../../../context"
import { useNavigate } from "react-router-dom"
import Name from "../Name"
import Categories from "../Categories"
import Time from "../Time"
import Ingredients from "../Ingredients"
import Steps from "../Steps"
import style from "./index.module.css"

function NewRecipePage () {
    const [name, setName] = useState(0)
    const [categories, setCategories] = useState([])
    const [time, setTime] = useState("...")
    const [people, setPeople] = useState("...")
    const [ingredientsList, setIngredientsList] = useState()
    const [steps, setSteps] = useState({})

    const {formErrors} = useContext(NewRecipeErrorContext)

    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        // Data to submit
        const newRecipe = {
            name: name,
            category: categories,
            time: time,
            ingredients: ingredientsList,
            steps: steps
        }
        navigate("/livre-de-recettes?new=1")
    }

    return (
        <Fragment>
            <h1 className={style.title}>Ajouter une nouvelle recette</h1>

            <form onSubmit={(e)=>handleSubmit(e)} className={style.form}>
                <div className={style.intro}>
                    <Name name={name} setName={setName} />
                    <Categories categories={categories} setCategories={setCategories} />
                    <Time time={time} setTime={setTime} />

                    <Ingredients people={people} setPeople={setPeople} setIngredientsList={setIngredientsList} />
                </div>
                <Steps steps={steps} setSteps={setSteps} />

                <button type="submit" className={`button ${style.submitButton}`} disabled={formErrors.length !== 0}>Valider</button>
            </form>
        </Fragment>
    )
}

export default NewRecipePage