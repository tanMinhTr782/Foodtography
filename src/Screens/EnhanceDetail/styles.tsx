import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 10,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    title: {
        color: Colors.GREENSUPERDARK,
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 5,
        marginBottom: 10,
    },
    detailWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    titleWrapper: {
        position: 'absolute',
        bottom: -20,
        right: 40,
        left: 40,
        height: 65,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.34,
        shadowRadius: 5,
        elevation: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    informationWrapper: {
    },
    subTitle: {
        color: Colors.GREENSUPERDARK,
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
    },
    simpleText: {
        fontSize: 16,
        paddingBottom: 10,
        textAlign: 'justify',
    },
});
