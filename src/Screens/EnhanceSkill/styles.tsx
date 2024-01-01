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
        marginBottom: 15,
    },
    detailWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    }
});
