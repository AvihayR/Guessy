import { StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/colors"

export default function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemTxt}><Text style={[styles.highlight]}>#{roundNumber}</Text></Text>
            <Text style={styles.itemTxt}>Opponent's Guess: <Text style={[styles.boldTxt, styles.highlight]}>{guess}</Text> </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        paddingVertical: 12,
        paddingHorizontal: 40,
        marginVertical: 8,
        backgroundColor: Colors.secondary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemTxt: {
        fontFamily: 'open-sans'
    },
    highlight: {
        color: Colors.primary500
    },
    boldTxt: {
        fontFamily: 'open-sans-bold',
    }
})