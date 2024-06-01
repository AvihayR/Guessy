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
  let screen = <StartGameScreen onPickNumber={setPickedNumber} />

  const [isFontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  // Prevent the splash screen from auto-hiding
  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
  }, [])

  // Hide the splash screen when the fonts are loaded
  useEffect(() => {
    if (isFontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [isFontsLoaded])

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
