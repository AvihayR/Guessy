import { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import diceBgImg from './assets/images/background.png'
import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

export default function App() {

  const [pickedNumber, setPickedNumber] = useState(null)
  const [isGameOver, setGameIsOver] = useState(false)
  const [guessRounds, setGuessRounds] = useState(0)

  const [isFontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
  }, [])
  useEffect(() => {
    if (isFontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [isFontsLoaded])


  let screen = <StartGameScreen onPickNumber={setPickedNumber} />

  if (pickedNumber) {
    screen = <GameScreen chosenNumber={pickedNumber} onGameOver={gameOverHandler} />
  }
  if (pickedNumber && isGameOver) {
    screen = <GameOverScreen roundsNumber={guessRounds} pickedNumber={pickedNumber} onStartNewGame={startNewGameHandler} />
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler() {
    setPickedNumber(null)
    setGameIsOver(false)
    setGuessRounds(0)
  }

  return (
    <>
      {/* <StatusBar barStyle={'light-content'} /> */}
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
