import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    welcomeImageContainer: {
        width: 375,
    },
    welcomeImage: {
        width: '100%',
    },
    welcomeMain: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: Colors.WHITE,
        height: 240,
    },
    welcomeButtonLogin: {
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 100,
        width: '100%',
        marginBottom: 20,
        backgroundColor: Colors.GREENDARK,
    },
    welcomeLoginText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
    },
    welcomeButtonSignup: {
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 100,
        width: '100%',
        backgroundColor: Colors.WHITE,
        borderColor: Colors.GREENDARK,
        borderWidth: 1,
    },
    welcomeSignupText: {
        color: Colors.GREENDARK,
        fontWeight: 'bold',
    },
});
