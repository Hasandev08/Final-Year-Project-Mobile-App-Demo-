import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { styles } from './style'

const AppButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

export default AppButton
