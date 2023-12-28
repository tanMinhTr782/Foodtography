import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeImageContainer: {
        width: '100%',
        height: '70%',
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
        width: '100%',
        height: '30%',
        // height: 240,
        // width: '40%',
    },
    welcomeButtonLogin: {
        // paddingLeft: 50,
        // paddingRight: 50,
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
