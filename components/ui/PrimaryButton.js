import { Text, View, Pressable, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

Colors
export default function PrimaryButton({ children, onPress, txtStyle }) {

    return (
        <View style={styles.btnOuterContainer}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed ? [styles.pressed, styles.btnInnerContainer] : styles.btnInnerContainer}
                android_ripple={{ color: Colors.primary100 }}
            >
                <Text style={[styles.btnText, txtStyle]}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btnOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.primary600
    },
    btnInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: .75,
    }
})