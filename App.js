import { useCallback, useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native'
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

  const [fontsLoaded, fontError] = useFonts({
    sansReg: require('./assets/fonts/sansReg.ttf'),
    sansBold: require('./assets/fonts/sansBold.ttf'),
  })



  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
      console.log('ready')
      console.log(fontError)
    }
    else {
      SplashScreen.preventAutoHideAsync()
      console.log('not ready yet')
      screen = <Text>Hello</Text>
    }

  }, [fontsLoaded])


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
          <SafeAreaView style={styles.rootScreen}>
            {screen}
            {/* <Text style={styles.boldTxt}>Hello</Text> */}
          </SafeAreaView>
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
  },
  // boldTxt: {
  //   fontFamily: 'sansBold',
  // }
})
