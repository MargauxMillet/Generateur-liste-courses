import style from "./index.module.css"

function QuantityInput ({value, setValue, name, updateRecipesList}) {
    return (
        <div className={style.quantityInput}>
            <button onClick={()=>{ const newValue = value - 1; setValue(newValue); updateRecipesList(name, newValue)}} disabled={value <= 1}>
                <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.6447 0L15 3H0.355263L0 0H14.6447Z"/>
                </svg>
            </button>
            
            <div>{value}</div>

            <button onClick={()=>{ const newValue = value + 1; setValue(newValue); updateRecipesList(name, newValue)}}>
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7269 6.04906L13 7.71321H7.5105V14L5.51681 13.8943V7.71321H0.218487L0 6.04906H5.51681V0L7.5105 0.0792458V6.04906H12.7269Z"/>
                </svg> 
            </button>
        </div>
    )
}

export default QuantityInput