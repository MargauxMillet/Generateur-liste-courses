import "./index.css"
import { NewRecipeErrorProvider } from "../../context"
import NewRecipePage from "../../components/NewRecipe/NewRecipePage"

function NewRecipe () {
    return (
        <NewRecipeErrorProvider>
            <NewRecipePage />
        </NewRecipeErrorProvider>
    )
}

export default NewRecipe