import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    backgroundColor: "red",
  },
  landing: {
    container: {
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
    },
    heading: { fontSize: 40 },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "orange",
      height: 50,
      width: 100,
      margin: 5,
      borderRadius: 50,
      shadowColor: 'black',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.2,
      shadowRadius: 3

    },
  },
});

export default styles;
