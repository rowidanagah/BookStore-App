import useDeleteBook from "../../hooks/useDeleteBook";

const DeleteBookBtn = ({ uuid }) => {
    const { handelDelteBook, data, loading, } = useDeleteBook();

    const confirmDelte = async () => {
        console.log(uuid)
        await handelDelteBook({"bookUuid": "b59d1bc1-b88a-4eb7-9849-cc3b222ede46"})
    }
    return (
        <button onClick={() => confirmDelte()}><i class="fa-solid fa-trash"></i></button>

    )
}


export default DeleteBookBtn;