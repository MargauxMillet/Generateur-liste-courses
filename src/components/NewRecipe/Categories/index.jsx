import style from "./index.module.css"

import salad from "../../../assets/saladIcon.svg"
import vegetarian from "../../../assets/vegetarianIcon.svg"
import hoven from "../../../assets/hovenIcon.svg"
import quick from "../../../assets/quickIcon.svg"

function Categories({categories, setCategories}) {
    const categoriesInfos = [
        { id:"category-salad", category: "Salade", img: salad},
        { id:"category-vegetarian", category: "Végétarien", img: vegetarian},
        { id:"category-hoven", category: "Au four", img: hoven},
        { id:"category-quick", category: "Rapide", img: quick}
    ]

    function handleChange (value) {
        const updatedCategories = [...categories]
        const index = updatedCategories.indexOf(value)
        index == -1 ? updatedCategories.push(value) : updatedCategories.splice(index, 1)
        setCategories(updatedCategories)
    }

    return (
        <div className={style.categoriesContainer}>
            {categoriesInfos.map(({id, category, img})=>{
                return (
                    <div key={id} className={style.categoriesItem}>
                        <img src={img} alt="" />
                        <label htmlFor={id}>{category}</label>
                        <input 
                            type="checkbox" 
                            name="category" 
                            id={id} 
                            value={category}
                            onChange={(e)=>handleChange(e.target.value)}
                        /> 
                    </div>
                )
            })}
        </div>
    )
}

export default Categories