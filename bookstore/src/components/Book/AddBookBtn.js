import { useContext } from "react";
import { navigationContext } from "../../context/navigationContext";
import navValues from "../../helpers/navValues";

const AddBookBtn = () => {
    const { navigateTo } = useContext(navigationContext);
    const navigateToAddBook = () => navigateTo(navValues.addBook)
    return (

        <div class="container text-center mb-3 ">
            <div class="solution_card ">
                <div class="solu_description">
                    {/* <Link to={`/book/${id}`} > */}
                    <button type="buton" class="btn" onClick={navigateToAddBook}>
                        Add Book </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )

}

export default AddBookBtn;