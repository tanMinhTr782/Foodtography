import React from 'react';
import { i18n, LocalizationKey } from '@/Localization';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from 'native-base';
import { RootScreens } from '..';
import { styles } from './styles';

export const Welcome = (props: { onNavigate: (string: RootScreens) => void }) => {
    return (
        <View>
            <View style={styles.welcomeImageContainer}>
                <Image source={require('../../../assets/welcome.png')} style={styles.welcomeImage} />
            </View>
            <View style={styles.welcomeMain}>
                <Button onPress={() => props.onNavigate(RootScreens.LOGIN)} style={styles.welcomeButtonLogin}>
                    <Text style={styles.welcomeLoginText}>Login</Text>
                </Button>
                <Button onPress={() => props.onNavigate(RootScreens.SIGNUP)} style={styles.welcomeButtonSignup}>
                    <Text style={styles.welcomeSignupText}>Sign Up</Text>
                </Button>
            </View>
        </View>
    );
};