import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
    createRecipeContainer: {
      backgroundColor: "white",
      paddingLeft: 18,
      paddingRight: 18,
      paddingTop: 21,
      borderColor: Colors.BLACK
    },
    title: {
      fontSize: 27,
      fontWeight: "bold",
      paddingBottom: 18,
      marginTop: 3, 
      paddingLeft: 18,
    },
    componentContainers: { 
        width: "100%",
        height: 48,
        borderRadius: 10,
        backgroundColor: Colors.WHITE,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 18,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    componentText: {
        fontSize: 16,
        margin: 10, 
        alignItems: 'center', 
        fontWeight: 'bold'
    }, 
    componentArrow: {
        flex: 1, 
        textAlign: 'right'
    }, 
    componentSwitch: {
      flex: 1, 
      textAlign: 'right', 
      alignItems: "flex-end",
  }, 
    userInfoContainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
    imageFrame: {
      width: 80,
      height: 80,
      borderRadius: 60,
      alignItems: "center",
      marginTop: 21, 
    },
    logoGroup: {
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'row', 
    },
    userName: {
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 13, 
      marginBottom: 41,
    },
    version: {
      textAlign: 'center', 
      fontStyle: 'italic', 
      fontSize: 12,
      marginRight: 6,
      paddingTop: 6, 
    },
    logoSocial: {
      paddingRight: 13, 
    },
    ingredientCount: {
      fontSize: 18,
    },
    optionalText: {
      fontSize: 22,
      color: "#949494",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      height: 48,
      borderRadius: 10,
      backgroundColor: "#3C736320",
      paddingLeft: 12,
      fontSize: 18,
      marginBottom: 14,
    },
    cookingInstructionsInput: {
      width: "100%",
      height: 124,
      borderRadius: 10,
      backgroundColor: "#3C736320",
      paddingLeft: 12,
      paddingTop: 8,
      fontSize: 18,
      lineHeight: 24,
      marginBottom: 14,
      textAlignVertical: "top",
    },
    authorNotesInput: {
      width: "100%",
      height: 70,
      borderRadius: 10,
      backgroundColor: "#3C736320",
      paddingLeft: 12,
      paddingTop: 8,
      fontSize: 18,
      lineHeight: 24,
      marginBottom: 14,
      textAlignVertical: "top",
    },
    sharingOptionsTitle: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 4,
    },
    optionContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
    },
    circle: {
      width: 24,
      height: 24,
      borderRadius: 15,
      borderWidth: 1,
      marginRight: 4,
    },
    checkmarkCover: {
      width: 24,
      height: 24,
      borderRadius: 15,
      borderWidth: 1,
      marginRight: 4,
      backgroundColor: "black",
      justifyContent: "center",
      alignItems: "center",
    },
    optionText: {
      fontSize: 18,
      marginLeft: 8,
      marginBottom: 2,
    },
    doneBtn: {
      backgroundColor: "#3C7363",
      width: "100%",
      height: 47,
      marginTop: 60,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    doneText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 14,
    },
  });
