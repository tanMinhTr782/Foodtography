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

export const createRecipe = async (body: any) => {
    console.log(body);
    return await axios
        .post(`${URL}/recipes`, body)
        .then((response) => console.log(response.data))
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};

export const getRecipesByAuthorId = async (authorId: string) => {
    return await axios
        .get(`${URL}/recipes/getByAuthorId/${authorId}`)
        .then((response) => response.data)
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
