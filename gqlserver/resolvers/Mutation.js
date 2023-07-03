const { getBooks, bookDetails, postBook } = require("./apiService")

const Mutation = {
    addBook: async (_, { bookInfo }) => {
        console.log('info', bookInfo)
        return postBook(bookInfo);
    }
}


module.exports = Mutation;