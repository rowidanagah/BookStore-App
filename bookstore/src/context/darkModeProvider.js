import { createContext, useCallback, useState } from "react"
import modeValues from "../helpers/modeValues"

const DarkModeContext = createContext(modeValues.dark)
const DarkModeProvider = ({ children }) => {

    const toggleModeWrapper = useCallback((prev) => setMode(
        prev === modeValues.dark ? modeValues.light : modeValues.dark
    ), [])

    const [appMode, setMode] = useState({ currentMode: modeValues.light, toggleModeWrapper })
    return (
        <DarkModeContext.Provider value={appMode}>
            {children}
        </DarkModeContext.Provider>
    )
}

export { DarkModeProvider, DarkModeContext }

