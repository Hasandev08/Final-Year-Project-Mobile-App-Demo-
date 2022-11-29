import React from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import ProductEntries from '../ProductEntries/index'

function Products({ image, clothes, price, discount }) {
  return (
    <View>
      <TouchableWithoutFeedback>
        <ProductEntries image={image} clothes={clothes} price={price} discount={discount} />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Products
