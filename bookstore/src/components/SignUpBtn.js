import { useContext } from "react";
import "./BookCard.css"
import { navigationContext } from "../context/navigationContext";
import navValues from "../helpers/navValues";
const SignUpBtn = () => {
    const { navigateTo } = useContext(navigationContext);
    console.log(useContext(navigationContext))
    const handelNav = () => {
        navigateTo(navValues.register);

    }
    return (

        <div class="container ">
            <div class="solution_card">
                <div class="solu_description">
                    {/* <Link to={`/book/${id}`} > */}
                    <button type="buton" class="btn" onClick={handelNav}>
                        Sign Up </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}


export default SignUpBtn;