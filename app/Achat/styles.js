import { StyleSheet } from 'react-native';
import COLORS from '../../src/const/color';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.lightBlue,
  },
  title: {
    fontSize: 25,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 20,
    color: "#474747",
    marginTop: 10,
  },
  headerBtn13: {
    marginLeft: 5,
    backgroundColor: COLORS.blue,
    paddingHorizontal: 20,
    paddingVertical: 7,
    color: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texte: {
    fontSize: 15,
    lineHeight: 10,
  },
  header1: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  text: {
    fontSize: 11,
    lineHeight: 25,
  },
  textes: {
    fontSize: 13,
    color: "#1243c9"
  },
  btn: {
    backgroundColor: "#1243c9",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 30,
    marginVertical: 10,
  },
  btnText: {
    fontSize: 15,
    color: "#FFF",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 40,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529CC0",
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529C47",
    marginHorizontal: 10
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#E2443B",
  },
  selected: {
    borderColor: "#E2443B",
    height: 30,
    width: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cont2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 25,
  },

  interiorImages: {
    width: 300,
    height: 200,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
  },


  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  img: {
    height: "25%",
    width: "100%",
  },
  cont3: {
    // flex: 3,
    height: '75%',
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 50,
    paddingHorizontal: 10,
  },
});
