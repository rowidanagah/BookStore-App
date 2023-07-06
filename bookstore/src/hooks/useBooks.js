import { useCallback, useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
import { useQuery } from "@apollo/client";
import { GET_BOOKS_QUERY } from "../ApolloClient/ROOT_QUERY";

const useBooks = () => {
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const [books, setBooks] = useState([]);

    const { data, loading, refetch, error } = useQuery(GET_BOOKS_QUERY, {
        pollInterval: 5000,
    });

    const setBooksWrapper = useCallback((books) => {
        setBooks(books);
    }, []);

    useEffect(() => {
        if (loading) {
            setLoadingState(loadingStatus.isLoading);
        }
        if (!loading) {
            setLoadingState(loadingStatus.loaded);
            setBooks(data);
        }
        if (error) {
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [data]);
    // const processAndHandleData = () => { }

    return { books, loadingState, refetch, setBooksWrapper };
};

export default useBooks;
