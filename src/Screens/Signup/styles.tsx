import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    container: {
        // backgroundColor: Colors.GREENDARK,
        height: '100%',
        // position: 'relative',
    },
    topContainer: {
        backgroundColor: Colors.GREENDARK,
        height: '60%',
        elevation: -1,
        zIndex: -1,
        padding: 25,
        paddingTop: 30,
    },
    backButton: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        justifyContent: 'flex-start',
    },

    backItem: {
        fontSize: 35,
        color: Colors.WHITE,
    },

    title: { paddingTop: 20, fontSize: 28, color: Colors.WHITE, fontWeight: 'bold' },
    subTitle: { paddingTop: 20, fontSize: 15, color: Colors.WHITE },
    submitButton: {
        // padding: 100,
        width: 175,
        marginTop: 10,
        borderRadius: 100,
        backgroundColor: Colors.GREENDARK,
    },

    submitButtonText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
    },

    mainContainer: {
        backgroundColor: Colors.WHITE,
        height: '55%',
        // height: 400,
        position: 'absolute',
        top: '30%',
        left: '6%',
        elevation: 10,
        zIndex: 10,
        width: '88%',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 15, height: 15 },
        shadowRadius: 10,
        borderRadius: 20,
    },
    formControl: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    formField: {
        width: '80%',
        position: 'relative',
        marginBottom: 20,
    },
    formInput: {
        marginLeft: 35,
        borderColor: Colors.WHITE,
    },
    formLabel: {
        position: 'absolute',
        left: 15,
        top: '32%',
    },
    formIcon: {
        fontSize: 14,
    },

    bottomContainer: {
        backgroundColor: Colors.WHITE,
        height: '40%',
        elevation: -1,
        zIndex: -1,
        padding: 40,
        // paddingTop: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },

    bottomInnerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    linkButton: {
        backgroundColor: 'transparent',
    },
    linkButtonText: {
        fontWeight: 'bold',
    },

    pdY5: {
        paddingTop: 25,
        paddingBottom: 25,
    },

    grayText: {
        color: 'gray',
    },

    googleButton: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 100,
        marginBottom: 20,
    },

    googleButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    googleIcon: {
        paddingLeft: 10,
        paddingRight: 10,
        color: Colors.WHITE,
        fontSize: 18,
    },
    googleText: {
        color: Colors.WHITE,
        paddingLeft: 10,
        paddingRight: 30,
        fontWeight: 'bold',
    },

    flexCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    boldText: {
        fontWeight: 'bold',
    },
    linkButtonGText: {
        fontWeight: 'bold',
        color: Colors.GREENDARK,
    },
    errorView: {
        // textAlign:
        paddingBottom: 10,
    },
    errorText: {
        color: Colors.PRIMARY,
    },
});
