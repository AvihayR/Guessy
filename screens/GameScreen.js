import { View, Text, StyleSheet, Alert } from "react-native"
import Title from "../components/ui/Title"
import { generateRandomBetween } from "../utils"
import { useEffect, useState } from "react"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"

let minNumber = 1
let maxNumber = 100

export default function GameScreen({ chosenNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, chosenNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if (currentGuess === chosenNumber) {
            onGameOver()
        }
    }, [currentGuess, chosenNumber])

    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < chosenNumber) ||
            (direction === 'higher' && currentGuess > chosenNumber)) {
            Alert.alert('Come on..', 'We both know that\'s not true 😉', [{ text: 'Sorry', style: 'cancel' }])
            return
        }
        else if (direction === 'lower') {
            maxNumber = currentGuess
        } else {
            minNumber = currentGuess + 1
        }

        const newRandomNumber = generateRandomBetween(minNumber, maxNumber, currentGuess)
        setCurrentGuess(newRandomNumber)
        // console.log('min:', minNumber, 'Max:', maxNumber)
    }


    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>

            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={() => { nextGuessHandler('higher') }}>+</PrimaryButton>
                    <PrimaryButton onPress={() => { nextGuessHandler('lower') }}>-</PrimaryButton>
                </View>
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 36
    },
})