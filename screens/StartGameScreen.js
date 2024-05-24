import { Alert, StyleSheet, TextInput, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react"

export default function StartGameScreen() {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(txt) {
        setEnteredNumber(txt)
    }

    function resetNumberHandler() {
        setEnteredNumber('')
    }

    function confirmHandler() {
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Oops, Invalid number!',
                'Your number must be between 1 and 99.',
                [{ text: 'OK', style: 'destructive', onPress: resetNumberHandler }]
            )
            return
        }

        console.log('Valid number! 🎉')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer}>
                    <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
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