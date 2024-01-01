import axios from 'axios';

const URL = 'https://foodtography-backend.vercel.app';

export const getIngredients = async () => {
    return await axios
        .get(`${URL}/ingredients`)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};