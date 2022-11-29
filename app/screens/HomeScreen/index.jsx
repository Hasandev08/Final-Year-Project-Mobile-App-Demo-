import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'

import FootBar from '../../components/FootBar'
import Products from '../../components/Products'

import { data, female, male } from '../../config/data'
import { styles } from './style'

function HomeScreen(props) {
  const [product, setProduct] = useState(true)
  const [maleItems, setMaleItems] = useState(false)
  const [femaleItems, setFemaleItems] = useState(false)

  if (product === true) {
    var products = data
  } else if (femaleItems === true) {
    var products = female
  } else if (maleItems === true) {
    var products = male
  }

  return (
    <View style={styles.background}>
      <Text style={styles.heading}>Find the best clothes for you</Text>
      <Text style={styles.subheading}>Categories</Text>
      <View style={styles.categoryButtons}>
        <TouchableOpacity
          style={product ? styles.button : styles.subButton}
          onPress={() => {
            setProduct(true)
            setMaleItems(false)
            setFemaleItems(false)
          }}
        >
          <Text style={styles.text}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={maleItems ? styles.button : styles.subButton}
          onPress={() => {
            setProduct(false)
            setMaleItems(true)
            setFemaleItems(false)
          }}
        >
          <Text style={styles.text}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={femaleItems ? styles.button : styles.subButton}
          onPress={() => {
            setProduct(false)
            setMaleItems(false)
            setFemaleItems(true)
          }}
        >
          <Text style={styles.text}>Female</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
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

export default HomeScreen
