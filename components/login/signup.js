import { Text, View, TextInput } from "react-native"
import { useState } from "react"
import MainButton from "../button/button.js"
import styles from "../../style.js"

export default function SignUp({ navigation }) {
    const blankForm = {
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }
    const [signUpForm, setSignupForm] = useState(blankForm)
    console.log(signUpForm)
    return (
        <View style={[styles.main.container, { marginTop: 120 }]}>

            <Text style={styles.main.heading}> Kirban</Text>
            <Text>Kanban style manager style</Text>

            <View style={styles.signUpForm.container}>
                <View style={styles.signUpForm.text}>
                    <TextInput placeholder="First Name" name="firstname" value={signUpForm.firstname} onChangeText={(newText) => setSignupForm({ ...signUpForm, firstname: newText })} />
                </View>
                <View style={styles.signUpForm.text}>
                    <TextInput placeholder="Last Name" name="lastname" value={signUpForm.lastname} onChangeText={(newText) => setSignupForm({ ...signUpForm, lastname: newText })} />
                </View>
                <View style={styles.signUpForm.text}>
                    <TextInput placeholder="Email" name="email" value={signUpForm.email} textContentType='emailAddress' onChangeText={(newText) => setSignupForm({ ...signUpForm, email: newText })} />
                </View>
                <View style={styles.signUpForm.text}>
                    <TextInput placeholder="Password" secureTextEntry={true} name="password" value={signUpForm.password} textContentType='newPassword' onChangeText={(newText) => setSignupForm({ ...signUpForm, password: newText })} />
                </View>

                <MainButton
                    title="Sign up"
                    styles={styles.main.button}
                    onPress={() => navigation.navigate("Login")}
                    text="Sign up" />
            </View>
        </View>
    )
}