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
    const blankError = {
        email: false,
        password: false
    }
    const emailError = 'Enter a valid email'
    const passwordError = 'password must be more than 8 characters!'
    const validEmail = /\S+@\S+/

    const [signUpForm, setSignupForm] = useState(blankForm)
    const [error, setError] = useState(blankError)

    const validation = () => {
        const validateEmail = !validEmail.test(signUpForm.email)
        const validatePassword = signUpForm.password.length < 8
        setError({
            email: validateEmail,
            password: validatePassword
        })
    }

    return (
        <View style={[styles.main.container, { marginTop: 120 }]}>

            <Text style={styles.main.heading}> Kirban</Text>
            <Text>Kanban style manager style</Text>

            <View style={styles.form.container}>
                <View style={styles.form.text}>
                    <TextInput placeholder="First Name" name="firstname" value={signUpForm.firstname} onChangeText={(newText) => setSignupForm({ ...signUpForm, firstname: newText })} />
                </View>
                <View style={styles.form.text}>
                    <TextInput placeholder="Last Name" name="lastname" value={signUpForm.lastname} onChangeText={(newText) => setSignupForm({ ...signUpForm, lastname: newText })} />
                </View>
                <View style={styles.form.text}>
                    <TextInput placeholder="Email" name="email" value={signUpForm.email} textContentType='emailAddress' onChangeText={(newText) => setSignupForm({ ...signUpForm, email: newText })} />
                </View>
                {error.email && (
                    <View>
                        <Text> {emailError}</Text>
                    </View>
                )}
                <View style={styles.form.text}>
                    <TextInput placeholder="Password" secureTextEntry={true} name="password" value={signUpForm.password} textContentType='newPassword' onChangeText={(newText) => setSignupForm({ ...signUpForm, password: newText })} />
                </View>
                {error.password && (
                    <View>
                        <Text> {passwordError}</Text>
                    </View>
                )}
                <MainButton
                    title="Sign up"
                    styles={styles.main.button}
                    onPress={() => {
                        validation()
                        // navigation.navigate("Login")
                    }}
                    text="Sign up" />
            </View>
        </View>
    )
}