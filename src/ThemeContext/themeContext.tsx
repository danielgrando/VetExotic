import { createContext } from "react";
import usePersistedState from "../utils/usePersistedState";
import { DefaultTheme } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

export const ThemeContextSwitch = createContext({});

export const ThemeContextProvider = (props: any) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light)
    }

    return (
        <ThemeContextSwitch.Provider value={{ toggleTheme, theme }} >
            {props.children}
        </ThemeContextSwitch.Provider>
    )
}

