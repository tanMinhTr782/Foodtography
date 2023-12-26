import axios from 'axios';

export const login = async (info: Object) => {
    // console.log(info);
    console.log('Here');

    return await axios
        .post('https://foodtography-backend.vercel.app/auth/login', info)
        .then((response) => {
            // console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
    // return response;
};

export const signup = async (info: Object) => {
    console.log(info);

    return await axios
        .post('https://foodtography-backend.vercel.app/auth/', info)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
    // return response;
};
