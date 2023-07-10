import { useMutation } from "@apollo/client";
import { DeleteBook_Mutation } from "../ApolloClient/ROOT_MUTATIONS";

const useDeleteBook = () => {
    const [deleteBook, { loading, error, data }] = useMutation(DeleteBook_Mutation);

    const handelDelteBook = async (book_uuid) => {
        try {
            console.log(book_uuid)
            const response = await deleteBook({ variables: { book_uuid } })
            console.log(response)
        }
        catch (error) { console.log(error) }
    }

    return { handelDelteBook, data, loading }
}
export default useDeleteBook;