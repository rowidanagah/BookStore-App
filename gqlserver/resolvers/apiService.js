const axios = require('axios');
// const pool = require("../database")

const API_URL = 'http://localhost:8000/'; // Replace with your Django REST API base URL

const getBooks = async () => {
    try {
        const response = await axios.get(`${API_URL}`)
        console.log(response.data[0])
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

const getFavoriteBooks = async () => {
    // try {
    //     const response = await axios.get(`${API_URL}`)
    //     console.log(response.data[0])
    //     return response.data;
    // }
    // catch (error) {
    //     console.log(error)
    // }
}

const getFavoriteBooksdb = async () => {
    const client = await pool.connect();
    try {
        const result = client.query("select * from  books_favoritebook")
        console.log(result)
        return [];
    }
    catch (error) {
        console.log(error)
    }
}

const bookDetails = async (book_uuid) => {
    console.log('id', book_uuid)
    try {
        const response = await axios.get(`${API_URL}/book/${book_uuid}`)
        console.log(response)
        return response.data
    }
    catch (error) {
        console.log(error)
    }
}


const postBook = async (bookInfo) => {
    try {
        const response = await axios.post(`${API_URL}`, bookInfo);
        console.log(response)
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {
    getBooks, bookDetails, getFavoriteBooks, postBook
}
