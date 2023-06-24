
import { classNames } from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";


interface NavbarProps {
    className?: string;

}

export const Navbar = ({className}: NavbarProps) => {
    return(
        <div className={classNames(s.Navbar, {}, [className])}>
            <div className={s.links}>
                <AppLink 
                theme={AppLinkTheme.SECONDARY} 
                to={"/"} 
                className={s.mainLink}>
                    main
                </AppLink>
                
                <AppLink  
                theme={AppLinkTheme.SECONDARY} 
                to={"/about"}>
                    about
                </AppLink>
            </div>
        </div>
    );
}