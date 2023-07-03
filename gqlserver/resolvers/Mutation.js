const { getBooks, bookDetails, registerUser, postBook, deletBook } = require("./apiService")

const Mutation = {
    addBook: async (_, { bookInfo }) => postBook(bookInfo),
    rmBook: async (_, { book_uuid }) => deletBook(book_uuid),
    register: async (_, { UserinputData }) => registerUser(UserinputData),

}


module.exports = Mutation;