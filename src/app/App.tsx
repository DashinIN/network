import { Routes, Route, Link } from "react-router-dom";
import {Suspense} from "react"

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "helpers/classNames/classNames";
import { AboutPage } from "Pages/AboutPage";
import { MainPage } from "Pages/MainPage";

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
                    <Route path={"/about"} element={<AboutPage/>}/>
                    <Route path={"/"} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;