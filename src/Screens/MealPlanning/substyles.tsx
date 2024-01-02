import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const subStyles = StyleSheet.create({
    mealPlanningContainer: {
        paddingLeft: 18,
        paddingRight: 18,
    },
    mealItemContainer: {
        paddingTop: 18,
        paddingBottom: 18,
        elevation: 0,
    },
    mealItemTopContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 0,
        zIndex: 0,
    },
    mealItemTitle: {
        color: Colors.GREENDARK,
        fontWeight: 'bold',
    },
    mealItemDropDown: {
        position: 'relative',
        elevation: 0,
        zIndex: 0,
    },
    mealItemButton: {
        backgroundColor: Colors.GREENDARK,
        padding: 7,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 100,
        elevation: 0,
    },
    mealItemButtonText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
    },
    mealDropdownMenu: {
        position: 'absolute',
        elevation: 1000,
        zIndex: 1000,
        width: 200,
        right: 0,
        top: 35,
        backgroundColor: Colors.GRAYDARK,
    },
    mealDropdownBtn: {},
    mealDropdownItem: {},
    mealDropdownText: {},
});
