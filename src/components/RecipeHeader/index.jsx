import { useState } from "react"
import style from "./index.module.css"
import ingredients from "../../data/ingredients.json"

import Végétarien from "../../assets/vegetarianIcon.svg"
import Salade from "../../assets/saladIcon.svg"
import Rapide from "../../assets/quickIcon.svg"
import Four from "../../assets/hovenIcon.svg"

function RecipeHeader({recipe}) {
    const [people, setPeople] = useState(4)
    
    const categoryIcons = {
        "Végétarien" : Végétarien,
        "Salade": Salade,
        "Rapide": Rapide,
        "Four": Four
    }

    return (
        <div className={style.header}>
            <h1>{recipe.name}</h1>

            {recipe.category.length > 0 && 
                <div className={style.categories}>
                    {recipe.category.map((item, index)=>{
                        return <img key={index} src={categoryIcons[item]} alt={item} />
                    })}
                </div>
            }

            <div className={style.recipeInfos}>
                <div>
                    <h4>Préparation</h4>
                    <p>{recipe.time} minutes</p>
                </div>

                <div>
                    <h4>Nombre de personnes</h4>
                    <div className={style.numberPeople}>
                        <button onClick={()=>setPeople(people - 1)} disabled={people == 1}>
                            <svg width="12" height="2" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6447 0L15 3H0.355263L0 0H14.6447Z"/>
                            </svg>
                        </button>
                        <div>{people}</div>
                        <button onClick={()=>{setPeople(people + 1)}}>
                            <svg width="10" height="11" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7269 6.04906L13 7.71321H7.5105V14L5.51681 13.8943V7.71321H0.218487L0 6.04906H5.51681V0L7.5105 0.0792458V6.04906H12.7269Z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div>
                    <h4>Ingrédients</h4>
                    <ul className={style.ingredientsList}>
                        {Object.entries(recipe.ingredients).map(([ingredient, quantity], index)=>{
                            const ingredientInfos = ingredients.find(
                                (item) => item.name == ingredient
                            )
                            const ingredientToShow = (ingredientInfos.plural && quantity * people > 1) ? ingredientInfos.plural : ingredient

                            return (
                                <li key={index}>
                                    <p>{quantity * people} {ingredientInfos.unit} {ingredientToShow}</p>
                                </li>
                            ) 
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecipeHeader