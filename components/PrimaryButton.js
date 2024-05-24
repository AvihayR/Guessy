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
                android_ripple={{ color: '#c61c77' }}
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
        borderWidth: 1,
        borderColor: '#5e0b39'
    },
    btnInnerContainer: {
        backgroundColor: '#741c4d',
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