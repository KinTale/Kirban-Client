import { Text, View } from "react-native"
import MainButton from "../button/button.js"
import styles from "../../style.js"

export default function Landing({navigation}){
    return (
    <>
    <View style={styles.landing.container}>
        <Text style={styles.landing.heading}> Kirban</Text>
        <Text>Kanban style task manager app</Text>
        <MainButton
                title="Login"
                styles={styles.landing.button}
                onPress={() => navigation.navigate("Login")}
                text="Login" />
        <MainButton
                title="Sign Up"
                styles={styles.landing.button}
                onPress={() => navigation.navigate("SignUp")}
                text="Sign Up" />
        </View>    
        </>
    )
}