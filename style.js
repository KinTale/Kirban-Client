import { StyleSheet } from "react-native";

const color = {
  yellow: '#FFC100',
  lightBlue: '#1D9ADF',
  darkBlue: '#063952',
  lightGrey: '#D9D9D7',
  darkGrey: '#666461',
}

const styles = StyleSheet.create({

  login: {
    container: {
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
      marginTop: 120,
    },
    form: {
      marginTop: 5,
      borderWidth: 1,
      padding: 50,
      backgroundColor: color.lightGrey
    },
    formText: {
      backgroundColor: "white",
      padding: 10,
      marginBottom: 5,
      marginLeft: -20,
      marginRight: -20
    }

  },
  landing: {
    container: {
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
      marginTop: 100
    },
    logo: {
      width: 400,
      height: 350
    },
    heading: {
      fontSize: 40
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color.yellow,
      height: 50,
      width: 100,
      margin: 5,
      borderRadius: 50,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 3

    },
  },
});

export default styles;
