import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import diceBgImg from './assets/images/background.png'

export default function App() {
  return (
    <>
      <LinearGradient colors={['#4a0327', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground
          source={diceBgImg}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.bgImage}
        >
          <StartGameScreen />
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.15
  }
})
