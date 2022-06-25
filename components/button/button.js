import { Text, Pressable } from "react-native"

export default function MainButton({title, styles, onPress, text}){
    return (
        <Pressable
        title={title}
        style={styles}
        onPress={onPress}>
            <Text>{text}</Text>
            </Pressable>
    )
}