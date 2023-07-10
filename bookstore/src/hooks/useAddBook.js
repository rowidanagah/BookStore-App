import { useMutation } from "@apollo/client";
import { AddBook_Mutation, SignUp_Mutation } from "../ApolloClient/ROOT_MUTATIONS"
import { useContext, useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
import { navigationContext } from "../context/navigationContext";
import navValues from "../helpers/navValues";

const useAddBook = () => {

    const [add_book, { loading, error, data }] = useMutation(AddBook_Mutation);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const { navigateTo } = useContext(navigationContext)
    const AddBookWrapper = async (bookInfo) => {
        try {
            console.log(bookInfo)
            const response = await add_book({
                variables: { "bookInfo": bookInfo },
                onCompleted: ({ addBook: book }) => {
                    console.log(book)
                    navigateTo(navValues.book, book.id)
                }
            })
            console.log(response, loading,)
        }
        catch (error) {
            return (error.massage)
        }
    }

    useEffect(() => {
        if (loading) {
            setLoadingState(loadingStatus.isLoading);
        }
        if (!loading) {
            setLoadingState(loadingStatus.loaded);
        }
        if (error) {
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [data])


    return { data, loadingState, AddBookWrapper }

}
export default useAddBook;