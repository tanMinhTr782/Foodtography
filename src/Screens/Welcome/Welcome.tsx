import React, { useEffect } from 'react';
import { i18n, LocalizationKey } from '@/Localization';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'native-base';
import { RootScreens } from '..';
import { styles } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const Welcome = (props: { onNavigate: (string: RootScreens) => void }) => {
    useEffect(() => {
        const checkLogin = async () => {
            let user = await AsyncStorage.getItem('user');
            console.log(user);

            if (user) {
                props.onNavigate(RootScreens.MAIN);
            }
        };
        checkLogin();
    }, []);

    return (
        <>
            <ImageBackground source={require('../../../assets/Welcome_background.png')} resizeMode="cover" style={styles.container}>
                <View style={styles.welcomeMain}>
                    <Text style={styles.welcomeNameApp}>Foodtography</Text>
                    <Text style={styles.welcomeSlogan}>From Photo To Taste</Text>

                    <Button onPress={() => props.onNavigate(RootScreens.LOGIN)} style={styles.welcomeButtonLogin}>
                        <Text style={styles.welcomeLoginText}>Login</Text>
                    </Button>
                    <Button onPress={() => props.onNavigate(RootScreens.SIGNUP)} style={styles.welcomeButtonSignup}>
                        <Text style={styles.welcomeSignupText}>Sign Up</Text>
                    </Button>
                </View>
            </ImageBackground>
        </>
    );
};