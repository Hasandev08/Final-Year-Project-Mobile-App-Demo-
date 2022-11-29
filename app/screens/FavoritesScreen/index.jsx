import React from 'react'
import { FlatList, Text, View } from 'react-native'

import FootBar from '../../components/FootBar'
import Products from '../../components/Products'

import { data } from '../../config/data'
import { styles } from './style'

function FavoritesScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={styles.heading}>Favorites</Text>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(key) => key.id.toString()}
        renderItem={({ item }) => (
          <Products
            image={item.image}
            clothes={item.clothes}
            price={item.price}
            discount={item.discount}
          />
        )}
      />
      <FootBar />
    </View>
  )
}

export default FavoritesScreen
