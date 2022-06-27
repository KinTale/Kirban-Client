import { StyleSheet } from "react-native";

const color = {
  yellow: '#FFC100',
  lightBlue: '#1D9ADF',
  darkBlue: '#063952',
  lightGrey: '#D9D9D7',
  darkGrey: '#666461',
}

const styles = StyleSheet.create({
  main: {
    container: {
      display: "flex",
      alignItems: "center",
      justifyItems: "center",
    },
    heading: {
      fontSize: 40
    },
    subHeading:{},
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
  form: {
    container: {
      marginTop: 5,
      borderWidth: 1,
      padding: 50,
      backgroundColor: color.lightGrey
    },
    text: {
      backgroundColor: "white",
      padding: 10,
      marginBottom: 5,
      marginLeft: -20,
      marginRight: -20
    }
  },

  landing: {
    logo: {
      width: 400,
      height: 350
    }
  },
});

export default styles;
