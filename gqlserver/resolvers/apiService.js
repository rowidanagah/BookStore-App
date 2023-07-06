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
        return response.data
    }
    catch (error) {
        console.log(error.message)
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

const deletBook = async (book_uuid) => {
    try {
        const response = await axios.delete(`${API_URL}book/${book_uuid}`);
        return true;
    }
    catch (error) {
        console.log(error)
        return false
    }
}

const getUserData = async (token) => {
    try {
        console.log('token', token)
        const response = await axios(`${API_URL}user-data/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            }
        });
        return response.data.user;
    }
    catch (error) { console.log('user data gets', error) }
}

const registerUser = async (UserInputData) => {
    try {
        console.log('user-----------', UserInputData)
        const response = await axios.post(`${API_URL}api/v1/rest-auth/registration/`, UserInputData);
        console.log(response)
        const token = response.data.key
        const user = await getUserData(token);
        return { token, user }

    } catch (error) {
        console.log(error.message)
    }
}

const loginUser = async (userInfo) => {
    try {
        console.log('info', userInfo)
        const response = await axios.post(`${API_URL}api/v1/login/`, userInfo);
        const token = response.data.token;
        const user = await getUserData(token);
        return { token, user }
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getBooks, bookDetails, getFavoriteBooks, postBook, deletBook, registerUser, getUserData
    , loginUser
}
