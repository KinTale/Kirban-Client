import { Text, View, TextInput } from "react-native"
import MainButton from "../button/button.js"
import styles from "../../style.js"

export default function SignUp(){
    return (
    <>
    <View style={styles.login}>
        <Text> Kirban</Text>
        <Text>Kanban style manager style</Text>
        </View >
        <View>
<TextInput placeholder="First Name"/>
<TextInput placeholder="Last Name"/>
<TextInput placeholder="Email"/>
<TextInput placeholder="Password" secureTextEntry={true}/>

        </View>
        <MainButton
                title="Sign Up"
                styles={styles.landing.button}
                onPress={() => navigation.navigate("SignUp")}
                text="Sign Up" />
        
        </>
    )
}