import { StyleSheet } from 'react-native';
import { Colors } from '@/Theme/Variables';

export const styles = StyleSheet.create({
  createRecipeContainer: {
    backgroundColor: "white",
    minHeight: '100%',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 21,
    borderColor: Colors.BLACK
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    marginRight: 36
  },
  firstComponentContainers: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 18,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  componentContainers: {
    width: "100%",
    height: 48,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: 18,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5
  },
  componentText: {
    fontSize: 16,
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageFrame: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    marginTop: 21,
  },
  imageFrame2: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    marginTop: 21,
    borderColor: 'black',
    borderWidth: 1
  },
  logoGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.GREENDARK,
    borderRadius: 100,
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 10,
    zIndex: 9999
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
  saveBtn: {
    backgroundColor: "#3C7363",
    width: 160,
    height: 47,
    marginTop: 30,
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: "center",
    borderRadius: 34,
  },
  doneText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  line: {
    marginLeft: 12,
    marginRight: 12,
    height: 1,
    backgroundColor: '#D9D9D9'
  }
});
