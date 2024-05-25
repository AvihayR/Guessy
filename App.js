import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import diceBgImg from './assets/images/background.png'
import { useState } from 'react'

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null)
  let screen = <StartGameScreen onPickNumber={setPickedNumber} />

  if (pickedNumber) {
    screen = <GameScreen />
  }

  return (
    <>
      <LinearGradient colors={['#4a0327', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground
          source={diceBgImg}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.bgImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
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
