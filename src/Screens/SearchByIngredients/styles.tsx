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
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.GREENDARK,
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
        alignItems: 'center'
    },
    itemText: {
        textAlign: 'center',
        fontSize: 14,
    },
    ingredientsImage: {
        width: 60,
        height: 60,
        borderRadius: 35,
    },
    onSearchText: {
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 20,
        padding: 10,
        textAlign: 'center',
    },
    onSearchText0: {
        backgroundColor: '#d2d1d1',
        color: '#ffffff',
    },
    onSearchText1: {
        backgroundColor: Colors.GREENDARK,
        color: '#ffffff',
    }
});
