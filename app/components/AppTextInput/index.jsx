import React from 'react'
import { Text, TextInput, View } from 'react-native'

import { styles } from './style'

const AppTextInput = ({ text, ...otherProps }) => (
  <>
    <View>{text && <Text style={styles.heading}>{text}</Text>}</View>
    <View style={styles.container}>
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  </>
)

export default AppTextInput
