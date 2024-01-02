import axios from 'axios';

const URL = 'https://api.spoonacular.com';
const apiKey = 'e7c3f1b16d5347b8baf81e13bc7adefb';

export const getRecipesByIngredients = async (ingredients: string[], quantity: number) => {
    return await axios
        .get(`${URL}/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}&number=${quantity}`)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const getRandomRecipes = async () => {
    return await axios
        .get(`${URL}/recipes/random?apiKey=${apiKey}`)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
