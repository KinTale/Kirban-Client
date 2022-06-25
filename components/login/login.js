import { Text, View, TextInput } from "react-native"
import MainButton from "../button/button.js"
import styles from "../../style.js"

export default function Login(){
    return (
    <>
    <View style={styles.login}>
        <Text> Kirban</Text>
        <Text>Kanban style manager style</Text>
        </View >

        <View>
<TextInput placeholder="Username"/>
<TextInput placeholder="Password" secureTextEntry={true}/>

        </View>
        <MainButton
                title="Login"
                styles={styles.landing.button}
                onPress={() => navigation.navigate("SignUp")}
                text="Login" />
        
        </>
    )
}