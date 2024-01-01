import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    searchByIngredientsContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 10,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.GREENSUPERDARK,
        marginTop: 15,
    },
    ingredientContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 90,
        marginTop: 15
    },
    itemImageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
    },
    itemText: {
        textAlign: 'center',
        fontSize: 14,
        color: Colors.GREENSUPERDARK,
        paddingTop:5,
    },
    ingredientsImage: {
        width: 60,
        height: 60,
        borderRadius: 35,
    },
    textWrapper0: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#d2d1d1',
        width: '100%',
        height: 40,
    },
    textWrapper1: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20,
        backgroundColor: Colors.GREENDARK,
        width: '100%',
        height: 40,
    },
    onSearchText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});
