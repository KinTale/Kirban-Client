import { Text, View, TextInput } from "react-native"
import { useState } from "react"
import MainButton from "../button/button.js"
import styles from "../../style.js"

export default function Login({ navigation }) {
    const blankForm = {
        email: "",
        password: ""
    }
    const [loginForm, setLoginForm] = useState(blankForm)

console.log(loginForm)
    return (
        <View style={[styles.main.container, { marginTop: 120 }]}>

            <Text style={styles.main.heading}> KIRBAN</Text>
            <Text>Kanban style manager style</Text>

            <View style={styles.form.container}>
                <View style={styles.form.text}>
                    <TextInput placeholder="Email" name="email" value={loginForm.email} onChangeText={(newText) => setLoginForm({ ...loginForm, email: newText })}/>
                </View>
                <View style={styles.form.text}>
                    <TextInput placeholder="Password" secureTextEntry={true}  name="password" value={loginForm.password} onChangeText={(newText) => setLoginForm({ ...loginForm, password: newText })}               />
                </View>                                                                                       
                           
                <MainButton      
                    title="Login"
                    styles={styles.main.button}         
                    onPress={() => navigation.navigate("Home")}
                    text="Login" />
            </View>
        </View>
    )
}