const { registerUser, loginUser, postBook, deleteBook } = require("./apiService")

const Mutation = {
    addBook: async (_, { bookInfo }) => postBook(bookInfo),
    rmBook: async (_, { book_uuid }) => deleteBook(book_uuid),
    register: async (_, { UserinputData }) => registerUser(UserinputData),
    login: async (_, { userInfo }) => {
        const res = loginUser(userInfo);
        console.log(res)
        return res
    }

}


module.exports = Mutation;