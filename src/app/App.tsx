import {Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import "./styles/index.scss"


const App = () => {
    
    const {theme, toggleTheme} = useTheme()

    return(
        <div className={classNames("app", {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={"/"}>main</Link>
            <Link to={"/about"}>about</Link>
            <AppRouter/>
        </div>
    )
}

export default App;