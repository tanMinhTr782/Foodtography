import axios from 'axios';

const URL = 'https://foodtography-backend.vercel.app';

export const getRecipes = async () => {
    return await axios
        .get(`${URL}/recipes`)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
