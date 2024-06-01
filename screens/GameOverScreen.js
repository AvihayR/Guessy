import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import SuccessImg from '../assets/images/success.png'
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({ roundsNumber, pickedNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imgContainer}>
                <Image source={SuccessImg} style={styles.img} />
            </View>
            <Text style={styles.summaryTxt}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text>
                rounds to guess the number <Text style={styles.highlight}>{pickedNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 32,
    },
    img: {
        width: '100%',
        height: '100%'
    },
    summaryTxt: {
        fontFamily: 'open-sans',
        fontSize: 22,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})