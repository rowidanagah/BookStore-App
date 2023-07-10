import { createContext, useCallback, useState } from "react";
import navValues from "../helpers/navValues";

const navigationContext = createContext(navValues.home);

const NavigationProvider = ({ children }) => {
    const navigateTo = useCallback((navTo, params) => {
        setNav({ currntNav: navTo, navigateTo, params })
    }, [])
    const [nav, setNav] = useState({ currntNav: navValues.register, navigateTo });
    
    return (
        <navigationContext.Provider value={nav}>
            {children}
        </navigationContext.Provider>
    )
}

export { navigationContext, NavigationProvider };
