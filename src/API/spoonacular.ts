import axios from 'axios';

const URL = 'https://api.spoonacular.com';
const apiKey = 'f9f5337bf05d48598f74f84627ddaacc';

export const getRecipesByIngredients = async (ingredients: string[], quantity: number) => {
    return await axios
        .get(`${URL}/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}&number=${quantity}`)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
