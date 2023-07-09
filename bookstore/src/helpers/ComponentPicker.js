import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import BookDetails from "../components/BookDetails";
import Books from "../components/Books";
import navValues from "./navValues";

const ComponentPicker = ({ currentNavLocation }) => {
    console.log(currentNavLocation)
    switch (currentNavLocation) {
        case (navValues.home):
            return <Books />;
        case (navValues.register):
            return <SignUp />;
        case (navValues.login):
            return <Login />;
        case (navValues.book):
            return <BookDetails />
        default:
            return (
                <h3>
                    No component for navigation value
                    {currentNavLocation} found
                </h3>
            );

    }
}

export default ComponentPicker;