import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/logo.svg"
import style from "./index.module.css"
import { useEffect, useState } from "react"

function Header () {
    const location = useLocation()
    const [activePage, setActivePage] = useState("home")
    useEffect(() => {
        setActivePage(location.pathname == "/" ? "home" : location.pathname == "/livre-de-recettes" ? "recipeBook" : "other")
    }, [location])

    return (
        <header>
            <img src={Logo} alt="Logo" />
            <nav>
                <Link to="/" className={activePage == "home" ? style.active : ""}>
                    <svg className={style.icon} width="30" height="27" viewBox="0 0 30 27" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9C6 9 4.54405 9 3.00005 9C1.89548 9 1 9.89543 1 11V11C1 12.1046 1.89543 13 3 13H12M6 9C14.6595 9 15.3405 9 24 9M6 9L13 1M24 9H27C28.1046 9 29 9.89543 29 11V11C29 12.1046 28.1046 13 27 13V13M24 9L17 1M15 17V22M10 17V22M20 17V22M3 13L5.64224 24.4497C5.85166 25.3572 6.66246 26 7.59377 26C13.6717 26 16.3283 26 22.4062 26C23.3375 26 24.1483 25.3572 24.3578 24.4497L27 13M18 13H27"/>
                    </svg>
                    <p>Courses</p>
                </Link>
                <Link to="/livre-de-recettes" className={activePage == "recipeBook" ? style.active : ""}>
                    <svg className={style.icon} width="32" height="27" viewBox="0 0 32 27" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4V25C1 25.5523 1.43905 25.9328 1.97295 25.7915C4.33453 25.1663 10.1673 23.5003 16 26"/>
                        <path d="M16 26C23 23 30 25.9999 31 26"/>
                        <path d="M31 4V26"/>
                        <path d="M1 4L5 4"/>
                        <path d="M31 4L27 4"/>
                        <path d="M16 26V5"/>
                        <path d="M16 25C12 21.5 11 21 5 21"/>
                        <path d="M16 5C12 1.5 11 1 5 1"/>
                        <path d="M16 25C20 21.5 21 21 27 21"/>
                        <path d="M16 5C20 1.5 21 1 27 1"/>
                        <path d="M5 21V1"/>
                        <path d="M27 21V1"/>
                    </svg>
                    <p>Recettes</p>
                </Link>
                
            </nav>
        </header>
    )
}

export default Header