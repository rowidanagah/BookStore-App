import { useContext } from "react";
import "./BookCard.css"
import { navigationContext } from "../context/navigationContext";
import navValues from "../helpers/navValues";
const HomeBtn = () => {
    const { navigateTo } = useContext(navigationContext);
    const handelNav = () => {
        navigateTo(navValues.home);

    }
    return (

        <div class="container ">
            <div class="solution_card">
                <div class="solu_description">
                    {/* <Link to={`/book/${id}`} > */}
                    <button type="buton" class="btn" onClick={handelNav}>
                        Home </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}


export default HomeBtn;