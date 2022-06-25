import { Text, View, TextInput, Image } from "react-native"
import MainButton from "../button/button.js"
import styles from "../../style.js"

export default function Login() {
    return (
        <View style={styles.login.container}>

            <Text style={styles.landing.heading}> KIRBAN</Text>
            <Text>Kanban style manager style</Text>

            <View style={styles.login.form}>
                <View style={styles.login.formText}>
                    <TextInput placeholder="Username" />
                </View>
                <View style={styles.login.formText}>
                    <TextInput placeholder="Password" secureTextEntry={true} />
                </View>

                <MainButton
                    title="Login"
                    styles={styles.landing.button}
                    onPress={() => navigation.navigate("SignUp")}
                    text="Login" />
            </View>
        </View>
    )
}