import React from 'react'
import { FlatList, Text, View } from 'react-native'

import FootBar from '../../components/FootBar'
import Products from '../../components/Products'

import { data } from '../../config/data'
import { styles } from './style'

function HomeScreen(props) {
  return (
    <View style={styles.background}>
      <Text style={styles.heading}>Find the best clothes for you</Text>
      <Text style={styles.subheading}>Categories</Text>
      <FlatList
        data={data}
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

export default HomeScreen
