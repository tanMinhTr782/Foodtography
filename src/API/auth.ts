import AsyncStorage from '@react-native-async-storage/async-storage';
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
        .post('https://foodtography-backend.vercel.app/auth', info)
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

export const getCurrentUserId: any = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user) {
        let userId = JSON.parse(user).id;
        // console.log('UserId: ', userId);

        return JSON.parse(user).id;
    } else return '';
};

export const updateInfo = async (id: String, info: Object) => {
    return await axios
        .put(`https://foodtography-backend.vercel.app/auth/${id}`, info)
        .then((response) => {
            // console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
export const changePassword = async (info: any, userId: string) => {
    return await axios
        .post(`https://foodtography-backend.vercel.app/auth/${userId}/changePassword`, info)
        .then((response) => {
            // console.log(response.data);
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
            return error.response;
        });
};
