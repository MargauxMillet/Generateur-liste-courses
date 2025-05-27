import { Fragment, useEffect, useState } from "react"
import ingredients from "../../data/ingredients.json"
import TypeIngredientList from "../TypeIngredientList"
import style from "./index.module.css"

import fruitVegeIcon from "../../assets/fruitVegeIcon.svg"
import proteinIcon from "../../assets/proteinIcon.svg"
import coolIcon from "../../assets/coolIcon.svg"
import carbIcon from "../../assets/carbIcon.svg"
import otherIcon from "../../assets/otherIcon.svg"

function GroceryList ({groceryList, setGroceryList, setContent}) {
    const [categorizedIngredients, setCategorisedIngredients] = useState({
        "fruit/légume": [],
        "protéine": [],
        'frais': [],
        'féculent': [],
        "autre": []
    })

    useEffect(()=>{
        const updatedCategorisedIngredients = {
            "fruit/légume": [],
            "protéine": [],
            "frais": [],
            "féculent": [],
            "autre": []
        }

        groceryList.map((item) => {
            const ingredient = ingredients.find(
                (ingredient) => ingredient.name === item.ingredient
            )

            if (ingredient) {
                const plural = ingredient.plural ? ingredient.plural : ""
                const ingredientWithInfos = { ...item, unit: ingredient.unit, plural: plural}
                updatedCategorisedIngredients[ingredient.type].push(ingredientWithInfos)
            }
        }) 
        setCategorisedIngredients(updatedCategorisedIngredients)
    }, [groceryList])

    return (
        <Fragment>
            {
                groceryList.length >= 1 ?
                    <div className={style.fullList}>
                        <div className={style.typeList}>
                            {categorizedIngredients["fruit/légume"].length >= 1 && <TypeIngredientList title="Fruits et légumes" list={categorizedIngredients["fruit/légume"]} imgUrl={fruitVegeIcon} />}
                            {categorizedIngredients["protéine"].length >= 1 && <TypeIngredientList title="Protéines" list={categorizedIngredients["protéine"]} imgUrl={proteinIcon} />}
                            {categorizedIngredients["frais"].length >= 1 && <TypeIngredientList title="Produits frais" list={categorizedIngredients["frais"]} imgUrl={coolIcon} />}
                            {categorizedIngredients["féculent"].length >= 1 && <TypeIngredientList title="Féculents" list={categorizedIngredients["féculent"]} imgUrl={carbIcon} />}
                            {categorizedIngredients["autre"].length >= 1 && <TypeIngredientList title="Autres" list={categorizedIngredients["autre"]} imgUrl={otherIcon} />}
                        </div>
                        <button className="button" onClick={()=>setGroceryList([])}>Réinitialiser ma liste</button>
                    </div>
                :
                    <div className={style.emptyList}>
                        <div>Ma liste est vide</div>
                        <button className="button" onClick={()=>setContent('recipes')}>Choisir mes recettes</button>
                    </div>
            }
        </Fragment>
    )
}

export default GroceryList