import { createContext, useState } from "react"
import useLocalStorage from "use-local-storage"

 

export const HeaderContext = createContext({})

export const HeaderProvider = ({ children }) => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'light' : 'dark')
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const switchTheme = () => {
        const newTheme = theme === 'dark'? 'light':'dark';
        setTheme(newTheme)
    }

    const openMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <HeaderContext.Provider value={{  
            switchTheme, 
            theme, 
            openMenu,
            burger_class,
            menu_class
        }}>
            {children}
        </HeaderContext.Provider>
    )
}
