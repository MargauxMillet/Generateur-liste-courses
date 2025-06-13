import style from "./index.module.css" 

function StepsItem ({ steps, setSteps, stepNumber}) {
    
    function handleStepsChange (step, value) {
        const updatedSteps = {...steps}
        updatedSteps[step] = value
        setSteps(updatedSteps)
    }

    const isError = steps[stepNumber] && steps[stepNumber].length < 5

    return (
        <li key={stepNumber} id={stepNumber} className={`${isError ? `newRecipeError ${style.error}` : ""} ${style.stepItem}`}>
            {isError && <p>Le texte est trop court</p>}
            <h3 className={stepNumber == 1 ? "newRecipeRequired" : ""}>{stepNumber}.</h3>
            <textarea 
                name={`recipe-step-${stepNumber}`} 
                id={`recipe-step-${stepNumber}`} 
                placeholder={`Étape ${stepNumber}`} 
                value={steps[stepNumber]} 
                onChange={(e)=>handleStepsChange(stepNumber, e.target.value)} 
            /> 
        </li>
    )
}

export default StepsItem