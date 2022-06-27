import { Text, View, TextInput} from "react-native"
import MainButton from "../button/button.js"
import styles from "../../style.js"

export default function Login() {
    return (
        <View style={[styles.main.container, { marginTop: 120 }]}>

            <Text style={styles.main.heading}> KIRBAN</Text>
            <Text>Kanban style manager style</Text>

            <View style={styles.form.container}>
                <View style={styles.form.text}>
                    <TextInput placeholder="Username" />
                </View>
                <View style={styles.form.text}>
                    <TextInput placeholder="Password" secureTextEntry={true} />
                </View>

                <MainButton
                    title="Login"
                    styles={styles.main.button}
                    onPress={() => navigation.navigate("SignUp")}
                    text="Login" />
            </View>
        </View>
    )
}