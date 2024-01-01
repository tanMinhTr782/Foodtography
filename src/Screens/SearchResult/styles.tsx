import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    searchResultContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        marginRight: 15,
        marginLeft: 15,
        marginTop: 10,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    classificationBar: {

    },
    ingredientContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    classificationBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: Colors.GREENDARK,
        borderWidth: 1,
        borderRadius: 20,
    },
    classificationText: {
        fontWeight: 'bold',
        fontSize: 16,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    selected: {
        backgroundColor: Colors.GREENSUPERDARK,
    },
    scanImage: {
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },
    recipeDetailWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginTop: 10,
    }
});
