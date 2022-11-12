import React from 'react'
import { View } from 'react-native'

import AppNextButton from '../../components/AppNextButton'

import { styles } from './style'

const WelcomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.button}>
      <AppNextButton onPress={() => navigation.navigate('Login')} />
    </View>
  </View>
)

export default WelcomeScreen
