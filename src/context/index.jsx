import { createContext, useState } from "react";

export const NewRecipeErrorContext = createContext()
export const NewRecipeErrorProvider = ({children}) => {
    const [formErrors, setFormErrors] = useState(["name", "time", "people", "ingredients", "steps"])

    function addError (errorName) {
        let updatedFormErrors = [...formErrors]
        !updatedFormErrors.includes(errorName) && updatedFormErrors.push(errorName)
        setFormErrors(updatedFormErrors)
    }

    function removeError(errorName) {
        let updatedFormErrors = [...formErrors]
        updatedFormErrors = updatedFormErrors.filter(item => item !== errorName)
        setFormErrors(updatedFormErrors)
    }

    return (
        <NewRecipeErrorContext.Provider value={{formErrors, addError, removeError}}>
            {children}
        </NewRecipeErrorContext.Provider>
    )
}