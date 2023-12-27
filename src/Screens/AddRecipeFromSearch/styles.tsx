import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        padding: 18,
        paddingTop: 50,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding: 18,
        paddingTop: 0,
        paddingBottom: 0,
    },
    iconsWrap: {
        flexDirection: 'row',
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 23,
    },
    bookmarkCartContainer: {
        flexDirection: 'row',
    },
    topContainer: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    title: {
        fontWeight: 'bold',
        color: Colors.GREENDARK,
        fontSize: 18,
    },
    subTitleView: {
        paddingTop: 5,
    },
    subTitle: {
        fontWeight: 'bold',
        color: Colors.GRAYDARK,
    },
    closeButton: {
        backgroundColor: 'transparent',
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        width: 35,
    },
    closeItem: {
        fontSize: 30,
        color: Colors.BLACK,
    },
    flexBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    col8: {
        width: '80%',
    },
    col2: {
        width: '20%',
    },
    col5: {
        width: '50%',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    closeContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    dishContainer: {
        // width: 230,
        borderRadius: 16,
        backgroundColor: Colors.WHITE,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: { width: 15, height: 15 },
        shadowRadius: 10,
        elevation: -1,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    dishImageContainer: {
        position: 'relative',
    },
    dishImage: {
        width: '100%',
        height: 100,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    dishImageText: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: Colors.WHITE,
        fontSize: 12,
        fontWeight: 'bold',
    },
    dishInformationContainer: {
        backgroundColor: Colors.WHITE,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
    },
    dishInformationVotes: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 4,
        paddingBottom: 4,
    },
    dishIconStar: {
        color: Colors.YELLOW,
        paddingRight: 2,
        fontSize: 15,
    },
    dishName: {
        fontWeight: 'bold',
        color: Colors.GREENDARK,
        paddingBottom: 10,
        fontSize: 14,
    },
    py5: {
        paddingTop: 20,
        paddingBottom: 20,
    },
});
