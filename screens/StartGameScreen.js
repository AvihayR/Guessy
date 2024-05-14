import { StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

export default function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#60173f',
        borderRadius: 8,
        //Android shadow:
        elevation: 5,
        //iOS shadow:
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: '#ddb52d',
        borderBottomWidth: 2.5,
        color: '#ddb52d',
        marginVertical: '8',
    }
})