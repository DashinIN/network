import {Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import "./styles/index.scss"
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";


const App = () => {
    
    const {theme, toggleTheme} = useTheme()

    return(
        <div className={classNames("app", {}, [theme])}>
            <Navbar/>
           <div className="content-page">
                <Sidebar/>
                <AppRouter/>
           </div>
        </div>
    )
}

export default App;