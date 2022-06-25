import { Text, View, Image } from "react-native"
import MainButton from "../button/button.js"
import styles from "../../style.js"
import TempLogo from "../../images/templogo.png"

export default function Landing({ navigation }) {
    return (
        <>
            <View style={styles.landing.container}>
                <Image
                    style={styles.landing.logo}
                    source={TempLogo}
                />
                <Text style={styles.landing.heading}> KIRBAN</Text>
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