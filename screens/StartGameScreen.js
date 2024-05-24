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
            <View style={styles.buttonsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
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
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    btnContainer: {
        flex: 1
    }
})