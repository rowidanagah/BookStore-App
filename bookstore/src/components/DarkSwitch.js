import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeProvider";

const DarkSwitch = () => {
    const { currentMode, toggleModeWrapper } = useContext(DarkModeContext);
    const handleClick = () => toggleModeWrapper(currentMode);
    console.log(currentMode)
    return (
        <button onClick={() => toggleModeWrapper(currentMode)} className={`theme-switch ${currentMode}-switch ms-2`}>
            <i class="fa-solid fa-toggle-on"></i>
        </button>

    )
}

export default DarkSwitch;