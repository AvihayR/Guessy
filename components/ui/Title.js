import { StyleSheet, Text } from "react-native"


export default function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 8,
        padding: 12,
    }
})