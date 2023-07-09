import { useCallback, useState } from "react";

const useToggle = (inital = false) => {
    const [toggle, setToggle] = useState(inital);
    const toggleWrapper = useCallback((prev) => setToggle(!prev), [])
    return { toggle, toggleWrapper }
}
export default useToggle;