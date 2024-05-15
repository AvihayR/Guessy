import { Text, View, Pressable, StyleSheet } from "react-native"

export default function PrimaryButton({ children }) {

    function pressHandler() {
        console.log('Pressed')
    }

    return (
        <View style={styles.btnOuterContainer}>
            <Pressable
                onPress={pressHandler}
                style={({ pressed }) => pressed ? [styles.pressed, styles.btnInnerContainer] : styles.btnInnerContainer}
                android_ripple={{ color: '#691f48' }}
            >
                <Text style={styles.btnText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    btnOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    btnInnerContainer: {
        backgroundColor: '#6e2e51',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
})