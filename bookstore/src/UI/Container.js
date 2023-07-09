import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeProvider";
import modeValues from "../helpers/modeValues";
// import "./app.css"
import DarkSwitch from "../components/DarkSwitch";
const Container = ({ children }) => {
    const { currentMode } = useContext(DarkModeContext);
    console.log(useContext(DarkModeContext), currentMode === modeValues.dark)
    return (
        <div className={currentMode === modeValues.dark ? `Container Container-dark` : `Container Container-light`}>
            {/* <DarkSwitch/> */}
            {children}
        </div>
    )
}

export default Container;