import axios from "axios";

function registerUser(username, email, password, role, profilePicURL, address) {
    return axios.post('http://localhost:3002/registration',
        {
            username,
            email,
            password,
            role,
            profilePicURL,
            address
        },
        {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        }
    );
};

export default registerUser;