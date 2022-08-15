import { Text, View, TextInput } from "react-native"
import { useState } from "react"
import MainButton from "../button/button.js"
import styles from "../../style.js"
// import RNFetchBlob from "react-native-fetch-blob"

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
    const passwordError = 'Password must be more than 8 characters'
    const validEmail = /\S+@\S+/
    const host = process.env.API_URL
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpForm)
    }



    const [signUpForm, setSignupForm] = useState(blankForm)
    const [error, setError] = useState(blankError)

    const validation = () => {

        const notValidEmail = !validEmail.test(signUpForm.email)
        const notValidPassword = signUpForm.password.length < 8
        setError({
            email: notValidEmail,
            password: notValidPassword
        })
        return notValidEmail || notValidPassword
    }

    const signUp = async () => {
        const isNotValidated = validation()
        if (isNotValidated) { return }
        fetch(host + "/user", options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => {
                console.log(error)
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
                    <View >
                        <Text style={styles.form.error}>{emailError}</Text>
                    </View>
                )}
                <View style={styles.form.text}>
                    <TextInput placeholder="Password" secureTextEntry={true} name="password" value={signUpForm.password} textContentType='newPassword' onChangeText={(newText) => setSignupForm({ ...signUpForm, password: newText })} />
                </View>
                {error.password && (
                    <View>
                        <Text style={styles.form.error}>{passwordError}</Text>
                    </View>
                )}
                <View style={styles.main.container}>
                    <MainButton
                        title="Sign up"
                        styles={styles.main.button}
                        onPress={() => {
                            signUp()
                        }}
                        text="Sign up" />
                </View>
            </View>
        </View>
    )
}