import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';
import { transparentize } from 'native-base/lib/typescript/theme/tools';
import { useFonts } from 'expo-font';
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    welcomeImageContainer: {
        width: 375,
        marginTop: -40,
        paddingTop: 30,
        paddingRight: 50,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        textAlign: 'center',
        margin: 'auto'
    },
    welcomeImage: {
        width: '100%',
    },
    welcomeMain: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingTop: 30,
        paddingRight: 50,
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        textAlign: 'center',
        margin: 'auto'
    },
    welcomeButtonLogin: {
        // paddingLeft: 50,
        // paddingRight: 50,
        borderRadius: 100,
        width: '100%',
        marginBottom: 20,
        backgroundColor: Colors.GREENDARK,
        borderColor: 'white'
    },
    welcomeLoginText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        // fontSize: 18
    },
    welcomeNameApp: {
        color: Colors.GREENLIGHT_MORELIGHT,
        fontWeight: 'bold',
        fontSize: 32,
        marginBottom: 20,

    },
    welcomeSlogan: {
        color: Colors.GREENLIGHT_MORELIGHT,
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 20,

    },
    welcomeButtonSignup: {
        borderRadius: 100,
        width: '100%',
        backgroundColor: Colors.WHITE,
        // borderColor: Colors.GREENDARK,
        // borderWidth: 1,
    },
    welcomeSignupText: {
        color: Colors.GREENDARK,
        fontWeight: 'bold',
        fontSize: 18,
    },
    // container: {
    //     flex: 1,
    // },
});
