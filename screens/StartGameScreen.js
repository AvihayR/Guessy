import { Alert, StyleSheet, Text, TextInput, View } from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from "react"
import Colors from "../constants/colors"
import Title from "../components/ui/Title"
import Card from "../components/ui/Card"


export default function StartGameScreen({ onPickNumber }) {
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

        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>✨ Guess My Number ✨</Title>
            <Card>
                <Text style={styles.instructionText}>Enter a number</Text>
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
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 76,
        alignItems: 'center'
    },
    instructionText: {
        color: Colors.secondary500,
        fontSize: 24
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2.5,
        color: Colors.secondary500,
        marginVertical: 8,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    btnContainer: {
        flex: 1
    }
})