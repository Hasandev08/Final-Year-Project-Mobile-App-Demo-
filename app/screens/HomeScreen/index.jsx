import React from 'react'
import { Text, View } from 'react-native'
import colors from '../../config/colors'

import { styles } from './style'

function HomeScreen(props) {
  return (
    <View style={styles.background}>
      <Text style={{ color: colors.white }}>Find the best clothes for you</Text>
    </View>
  )
}

export default HomeScreen
