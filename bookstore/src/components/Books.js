import BooksList from "./BooksList";
import useBooks from "../hooks/useBooks";
import loadingStatus from "../helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicatorMsg";

const Books = () => {
    // const { data, loading, refetch } = useQuery(GET_BOOKS_QUERY) // , { pollInterval: 5000 }

    const { books, loadingState, refetch, setBooksWrapper } = useBooks();
    console.log(books);

    return loadingState !== loadingStatus.loaded ? (
        <LoadingIndicator msg={loadingState} />
    ) : (
        <BooksList books={books} refetch={refetch} />
    );
};

export default Books;
