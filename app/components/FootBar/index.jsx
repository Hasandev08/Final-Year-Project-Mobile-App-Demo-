import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import { Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons'

import colors from '../../config/colors'
import { styles } from './style'

function FootBar(props) {
  return (
    <View style={styles.bar}>
      <TouchableWithoutFeedback>
        <Octicons name='home' size={28} color={colors.white} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <MaterialIcons name='favorite-border' size={28} color={colors.white} />
      </TouchableWithoutFeedback>
      <View style={styles.search}>
        <TouchableWithoutFeedback>
          <Ionicons name='search' size={28} color={colors.white} />
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback>
        <Ionicons name='notifications-outline' size={28} color={colors.white} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Ionicons name='cart-outline' size={28} color={colors.white} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default FootBar
