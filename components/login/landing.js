import { Text, View, Image, StatusBar } from "react-native"
import MainButton from "../button/button.js"
import styles from "../../style.js"
import TempLogo from "../../images/templogo.png"

export default function Landing({ navigation }) {
    return (
            <View style={[styles.main.container,{  marginTop: 100} ]}>
                <Image
                    style={styles.landing.logo}
                    source={TempLogo}
                />
                <StatusBar barStyle={'dark-content'} />
                <Text style={styles.main.heading}> KIRBAN</Text>
                <Text>Kanban style task manager app</Text>
                <MainButton
                    title="Login"
                    styles={styles.main.button}
                    onPress={() => navigation.navigate("Login")}
                    text="Login" />
                <MainButton
                    title="Sign Up"
                    styles={styles.main.button}
                    onPress={() => navigation.navigate("SignUp")}
                    text="Sign Up" />
            </View>
    )
}