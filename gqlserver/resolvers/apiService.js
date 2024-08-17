const axios = require('axios');
// const pool = require("../database")

const API_URL = 'http://127.0.0.1:8000/'; // Replace with your Django REST API base URL

const getBooks = async () => {
    // axios({
    //     method: 'get',
    //     url: 'http://127.0.0.1:8000/',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    console.log(' in getting') 
    try {
        const response = await axios.get(`${API_URL}`)
       return response.data;
    }
    catch (error) {
        console.log(error.massage)
        throw new Error('An unexpected error occurred while getting books        ')
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
        console.log(error.massage)
        throw new Error('An unexpected error occurred')
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
        throw new Error('An unexpected error occurred')
    }
}


const postBook = async (bookInfo) => {
    try {
        console.log(bookInfo)
        const response = await axios.post(`${API_URL}`, bookInfo);
        console.log(response)
        return response.data;
    }
    catch (error) {
        console.log(error.message)
        throw new Error('An unexpected error occurred')
    }
}

const deleteBook = async (book_uuid) => {
    try {
        console.log(book_uuid, '------------------------------------------------------')
        const response = await axios.delete(`${API_URL}book/${book_uuid}`);
        return true;
    }
    catch (error) {
        console.log(error.massage)
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
        console.log(response, 'redd')
        return response.data.user;
    }
    catch (error) {
        console.log('user data gets', error)
        throw new Error('An unexpected error occurred')
     }
}

const registerUser = async (UserInputData) => {
    try {
        const response = await axios.post(`${API_URL}api/v1/rest-auth/registration/`, UserInputData);
        console.log(response, 'api response ')
        const token = response.data.key;
        return token

    } catch (error) {
        console.log(error.message, '---------- register error msg')
        // return error.message
        throw new Error('An unexpected error occurred')
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
        throw new Error('An unexpected error occurred')
    }
}

module.exports = {
    getBooks, bookDetails, getFavoriteBooks, postBook, deleteBook: deleteBook, registerUser, getUserData
    , loginUser
}
