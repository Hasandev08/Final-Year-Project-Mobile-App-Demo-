import React from 'react'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { MaterialIcons } from '@expo/vector-icons'

import colors from '../../config/colors'

import { styles } from './style'

function ProductEntries({ image, clothes, price, discount }) {
  return (
    <View style={styles.product}>
      <ImageBackground style={styles.image} source={image} imageStyle={{ borderRadius: 15 }}>
        <View style={styles.icon}>
          <TouchableOpacity>
            <MaterialIcons name='favorite-border' size={18} color={colors.black} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Text style={styles.clothes}>{clothes}</Text>
      <View style={styles.prices}>
        <Text style={{ color: colors.white, fontSize: RFValue(10), paddingRight: 10 }}>
          {price}
        </Text>
        <Text style={{ color: colors.bar, fontSize: RFValue(10) }}>{discount}</Text>
      </View>
    </View>
  )
}

export default ProductEntries
