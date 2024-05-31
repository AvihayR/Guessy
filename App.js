import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import diceBgImg from './assets/images/background.png'
import { useState } from 'react'
import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'


export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null)
  const [isGameOver, setGameIsOver] = useState(false)

  let screen = <StartGameScreen onPickNumber={setPickedNumber} />

  if (pickedNumber) {
    screen = <GameScreen chosenNumber={pickedNumber} onGameOver={gameOverHandler} />
  }
  if (pickedNumber && isGameOver) {
    screen = <GameOverScreen />
  }

  function gameOverHandler() {
    console.log('Game over! 🎉')
    setGameIsOver(true)
  }

  return (
    <>
      <LinearGradient colors={[Colors.primary800, Colors.secondary600]} style={styles.rootScreen}>
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
