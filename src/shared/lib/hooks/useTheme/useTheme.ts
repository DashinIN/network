import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../../../consts/localstorage';
import { Theme } from '../../../consts/theme';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.PINK;
            break;
        case Theme.PINK:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        document.body.className = newTheme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { theme: theme || Theme.LIGHT, toggleTheme };
};
