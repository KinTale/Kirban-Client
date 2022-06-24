import { Text, View, TextInput, Button } from "react-native"

export default function Login(){
    return (
    <>
    <View >
        <Text> Kirban</Text>
        <Text>Kanban style manager style</Text>
        </View >

        <View>
<TextInput placeholder="Username"/>
<TextInput placeholder="Password" secureTextEntry={true}/>

        </View>
        <Button
        title="Login"
        />
        
        </>
    )
}