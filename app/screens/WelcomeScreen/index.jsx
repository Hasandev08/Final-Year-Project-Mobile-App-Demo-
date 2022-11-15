import React from 'react'
import { Image, View } from 'react-native'

import AppNextButton from '../../components/AppNextButton'

import { styles } from './style'

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.image}>
      <Image style={styles.logo} source={require('../../../assets/logo.jpeg')} />
    </View>
    <View style={styles.button}>
      <AppNextButton onPress={() => navigation.navigate('Login')} />
    </View>
  </View>
)

export default WelcomeScreen
