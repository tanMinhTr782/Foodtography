import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    createRecipeContainer: {
        backgroundColor: 'black',
        flex: 1,
    },
    header: {
        color: Colors.BLACK,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 21,
        paddingBottom: 18,
        flexDirection: 'row',
    },
    title: {
        color: Colors.WHITE,
        fontSize: 20,
        margin: 6,
        marginLeft: -18,
        fontWeight: "bold",
        textAlign: 'center',
        flex: 1,
    },
    cameraFrame: {
        width: "100%",
        height: 50,
        borderRadius: 10,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 18,
        marginBottom: 10,
        flexDirection: "column",
        alignItems: "center",
    },
    subTitle: {
        color: Colors.WHITE,
        fontSize: 16,
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center', 
        marginBottom: 5, 
    },
    uploadIMG: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignItems: 'center',
    },
    iconToUploadIMG: {
        marginTop: 10,
    },
    cameraContainer: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
        marginBottom: 0,
        paddingBottom: 10, 
    },
    buttonContainer: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',

    },
    captureButton: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    twoButtonContainer: {
        color: Colors.BLACK,
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 5,
        paddingBottom: 28,
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    preview: {
        alignSelf: 'stretch',
        flex: 1,
        marginTop: 10,
    },
    resultContainer: {
        backgroundColor: Colors.WHITE,
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 21,
    },
    result: {
        color: 'red',
        fontSize: 16,
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    resultTitle: {
        color: 'black',
        fontSize: 25,
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    leftBtn: {
        alignItems: 'center',
    },
    rightBtn: {
        alignItems: 'center',
    },

})