const { getBooks, bookDetails, getFavoriteBooks } = require("./apiService")

module.exports = {
    book: async (_, { book_uuid }) => {
        console.log(book_uuid, '00000000000000000')
        return bookDetails(book_uuid)},
    getBooks: async () => getBooks(),
    getFavoriteBooks: async () => this.getFavoriteBooks
}

//  = Query;