import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    cardItemContainer: {
        position: 'relative',
        width: Dimensions.get('window').width * 0.45,
        maxWidth: 250,
        borderRadius: 15,
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.34,
        shadowRadius: 5,
        elevation: 10,
        marginBottom: 25
    },
    cardImage: {
        flex: 1,
        height: 190,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    favorite: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 30,
        height: 30,
        backgroundColor: '#000000',
        opacity: 0.5,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unFavorite: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 30,
        height: 30,
        backgroundColor: '#000000',
        opacity: 0.5,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        position: 'absolute',
        top: '30%',
        left: '30%',
    },
    premium: {
        position: 'absolute',
        top: 10,
        left: 5,
        backgroundColor: Colors.GREENSUPERDARK,
        borderRadius: 10,
    },
    premiumText: {
        padding: 8,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    dishVotes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dishIconStar: {
        color: Colors.YELLOW,
        padding: 1,
        fontSize: 15,
    },
    dishIconUnStar: {
        color: Colors.GRAY,
        padding: 1,
        fontSize: 15,
    },
    dishName: {
        color: '#4C6836',
        fontWeight: 'bold',
        paddingLeft: 3,
        fontSize: 16,
        paddingTop: 2,
    }
});
