import {useContext, useEffect, useState } from "react"
import style from "./index.module.css"
import StepsItem from "../StepsItem"
import { NewRecipeErrorContext } from "../../../context"

function Steps ({steps, setSteps}) {
    const {addError, removeError} = useContext(NewRecipeErrorContext)
    const [stepsNumber, setStepsNumber] = useState(1)

    function removeLastStep() {
        const updatedSteps = { ...steps }
        const lastStep = Math.max(...Object.keys(updatedSteps).map(Number))
        if (lastStep == stepsNumber) {
            delete updatedSteps[lastStep]
            setSteps(updatedSteps)
        }
    }

    useEffect(() => {
        let stepsError = false
        Object.values(steps).map((item)=>{
            item.length < 5 ? stepsError = true : ""
        })
        if (Object.keys(steps).length == 0 || stepsError) {
            addError("steps")
        } else {
            removeError("steps")
        }
    },[steps])

    return (
        <div className={style.stepsContainer}>
            <h2>Recette</h2>
            <ol>
                {Array.from({ length: stepsNumber }).map((_, index) => (
                    <StepsItem key={index+1} steps={steps} setSteps={setSteps} stepNumber={index+1}/>
                ))}
                <div className={`newRecipeButtonsQuant ${style.buttonsContainer}`}>
                    <button onClick={(e)=>{e.preventDefault(); setStepsNumber(stepsNumber-1); removeLastStep()}} disabled={stepsNumber <= 1}>
                        <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6447 0L15 3H0.355263L0 0H14.6447Z"/>
                        </svg>
                    </button>
                    <button onClick={(e)=>{e.preventDefault(); setStepsNumber(stepsNumber+1)}}>
                        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.7269 6.04906L13 7.71321H7.5105V14L5.51681 13.8943V7.71321H0.218487L0 6.04906H5.51681V0L7.5105 0.0792458V6.04906H12.7269Z"/>
                        </svg>
                    </button>
                </div>
            </ol>
        </div>
    )
}

export default Steps