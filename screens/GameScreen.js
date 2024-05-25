import { View, Text, StyleSheet } from "react-native"
import Title from "../components/Title"
import utils from "../utils"
import { useState } from "react"

export default function GameScreen({ chosenNumber }) {
    const initialGuess = utils.generateRandomBetween(1, 100, chosenNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <Text>{currentGuess}</Text>
            <View>
                <Text>Higher or lower?</Text>
                {/* + */}
                {/* - */}
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