import { StyleSheet, Text } from "react-native"


export default function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        // fontFamily: 'sansBold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
        padding: 12,
    }
})