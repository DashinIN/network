import { Routes, Route, Link } from "react-router-dom";
import {Suspense} from "react"
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./Pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme"
import {classNames} from "./helpers/classNames/classNames"

import "./styles/index.scss"


const App = () => {
    
    const {theme, toggleTheme} = useTheme()


    return(
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>main</Link>
            <Link to={"/about"}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageAsync/>}/>
                    <Route path={"/"} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;