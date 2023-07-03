const { getBooks, bookDetails, getFavoriteBook, getUserData } = require("./apiService")

module.exports = {
    book: async (_, { book_uuid }) =>
        bookDetails(book_uuid),
    getBooks: async () => getBooks(),
    // getFavoriteBooks: async () => getFavoriteBooks,
    UserInfo: async (_, { token }) => getUserData(token)
}

//  = Query;