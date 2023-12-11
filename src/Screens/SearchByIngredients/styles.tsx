import { StyleSheet, StatusBar, Platform } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    searchByIngredientsContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        position: 'relative',
        marginRight: 15,
        marginLeft: 15,
        paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 50) : 0,
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

    },
});
