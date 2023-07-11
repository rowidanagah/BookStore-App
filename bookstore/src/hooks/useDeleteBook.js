import { useMutation } from "@apollo/client";
import { DeleteBook_Mutation } from "../ApolloClient/ROOT_MUTATIONS";
import { useContext } from "react";
import { navigationContext } from "../context/navigationContext";
import navValues from "../helpers/navValues";

const useDeleteBook = () => {
    const [deleteBook, { loading, error, data }] = useMutation(DeleteBook_Mutation);
    const { navigateTo } = useContext(navigationContext)
    const handelDelteBook = async (book_uuid) => {
        try {
            console.log(book_uuid)
            const response = await deleteBook({
                variables: {
                    "bookUuid": book_uuid
                },
                onCompleted: () => navigateTo(navValues.home)
            })
            console.log(response)
        }
        catch (error) { console.log(error) }
    }

    return { handelDelteBook, data, loading }
}
export default useDeleteBook;