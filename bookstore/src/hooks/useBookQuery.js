import { useQuery } from "@apollo/client";
import { GET_BOOK_DETAIL_QUERY } from "../ApolloClient/ROOT_QUERY";
import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useBookQuery = (id) => {
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const { data, loading, refetch, error } = useQuery(GET_BOOK_DETAIL_QUERY,
        { variables: { "bookUuid": id } })

    useEffect(() => {
        if (loading) {
            setLoadingState(loadingStatus.isLoading);
        }
        else if (error) {
            setLoadingState(loadingStatus.hasErrored);
        }
        else if (loading !== false) {
            setLoadingState(loadingStatus.loaded);
        }
    }, [loading, error, data])

    return { book: data?.book, loadingState, refetch }

}

export default useBookQuery;