import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        borderRadius: 8,
        padding: 24,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.secondary500,
        fontFamily: 'sansBold',
        fontSize: 36,
        // fontWeight: 'bold'
    }
})