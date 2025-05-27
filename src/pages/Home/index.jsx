import { Fragment, useState } from "react";
import style from "./index.module.css"
import RecipesChoice from "../../components/RecipesChoice";
import GroceryList from "../../components/GroceryList";

function Home() {
    const [content, setContent] = useState('recipes')
    const [groceryList, setGroceryList] = useState([])

    return (
        <Fragment>
            <div className={style.menu}>
                <h1 onClick={()=>setContent('recipes')} className={content == 'recipes' ? style.active : ""}>Mes recettes</h1>
                <h1 onClick={()=>setContent('groceries')} className={content == 'groceries' ? style.active : ""}>Ma liste de courses</h1>
            </div>
            {content == "recipes" && <RecipesChoice setContent={setContent} setGroceryList={setGroceryList} />}
            {content == "groceries" && <GroceryList groceryList={groceryList} setGroceryList={setGroceryList} setContent={setContent} />}
        </Fragment>
    )
}

export default Home