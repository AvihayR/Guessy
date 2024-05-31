import { StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"

export default function Card({ children }) {
    return (
        <View style={styles.inputContainer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 24,
        marginHorizontal: 24,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        //Android shadow:
        elevation: 5,
        //iOS shadow:
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7,
        shadowOpacity: 0.25
    },
})