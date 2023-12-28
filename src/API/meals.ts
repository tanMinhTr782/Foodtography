import axios from 'axios';

const URL = 'https://foodtography-backend.vercel.app';

export const getMealsByWeek = async (userId: string, time: string) => {
    return await axios
        .get(`${URL}/meals/${userId}/${time}`)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const addNewMealRecipe = async (userId: string, mealId: string, recipeId: string) => {
    return await axios
        .post(`${URL}/meal-recipes`, { userId, mealId, recipeId })
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
