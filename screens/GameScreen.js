import { View, StyleSheet, Alert } from "react-native"
import Title from "../components/ui/Title"
import { generateRandomBetween } from "../utils"
import { useEffect, useState } from "react"
import NumberContainer from "../components/game/NumberContainer"
import PrimaryButton from "../components/ui/PrimaryButton"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import Foundation from '@expo/vector-icons/Foundation'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'


let minNumber = 1
let maxNumber = 100

export default function GameScreen({ chosenNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, chosenNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        minNumber = 1
        maxNumber = 100
    }, [])
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

            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
                <View style={styles.btnsContainer}>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={() => { nextGuessHandler('higher') }} txtStyle={styles.primaryButton}>
                            <MaterialCommunityIcons name="plus-circle-outline" size={30} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={() => { nextGuessHandler('lower') }} txtStyle={styles.primaryButton}>
                            <Foundation name="minus-circle" size={32} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
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
        paddingTop: 60
    },
    btnsContainer: {
        flexDirection: 'row',
        marginVertical: 4,
    },
    btnContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    },
    primaryButton: {
        fontSize: 24,
        fontWeight: 500,
    }
})