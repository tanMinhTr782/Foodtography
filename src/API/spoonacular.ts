import axios from 'axios';

const URL = 'https://api.spoonacular.com';
const apiKey = 'b23d4398b2624d9192c10b1c96a77e56';

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
