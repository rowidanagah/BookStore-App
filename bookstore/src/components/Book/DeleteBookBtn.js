import useDeleteBook from "../../hooks/useDeleteBook";

const DeleteBookBtn = ({ uuid }) => {
    const { handelDelteBook, data, loading, } = useDeleteBook();

    const confirmDelte = async () => {
        console.log(uuid)
        await handelDelteBook(uuid)
    }
    return (
        <button onClick={() => confirmDelte()}><i class="fa-solid fa-trash"></i></button>

    )
}


export default DeleteBookBtn;