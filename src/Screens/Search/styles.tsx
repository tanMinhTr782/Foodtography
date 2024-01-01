import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        marginRight: 15,
        marginLeft: 15,
    },
    ingredientContainer: {
    },
    title: {
        fontSize: 18,
        color: Colors.GREENSUPERDARK,
        fontWeight: 'bold',
    },
    buttonViewAll: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: Colors.GREENSUPERDARK,
    },
    itemContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 65,
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
        color: Colors.GREENSUPERDARK,
    },
    ingredientsImage: {
        width: 55,
        height: 55,
        borderRadius: 35,
    },
    mealContainer: {
        marginTop: 20
    },
    mealItemsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap:'wrap',
        marginTop: 20,
    },
    mealItemContainer: {
        width: "48%",
        position: 'relative',
        marginBottom: 15,

        borderRadius: 30,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.6,
        shadowRadius: 2,
        elevation: 10,
    },
    mealImage: {
        width: '100%',
        height: 120,
        borderRadius: 30,
    },
    mealText: {
        position: 'absolute',
        top: 45,
        left: 20,
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    cardContainer: {
        marginTop: 20,
    },
    cardItemContainer: {
        height: 230,
        borderRadius: 30,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.34,
        shadowRadius: 4.6,
        elevation: 10,
        marginBottom: 25
    },
    cardItemLastChild: {
        marginBottom: 60
    },
    cardImage: {
        width: '100%',
        height: 170,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 18,
        paddingLeft: 20,
        color: Colors.GREENSUPERDARK,
    }
});
