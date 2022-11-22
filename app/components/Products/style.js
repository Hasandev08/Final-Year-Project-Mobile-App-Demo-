import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  product: {
    marginLeft: 30,
  },
  image: {
    width: 150,
    height: 250,
    marginTop: 30,
    alignItems: 'flex-end',
  },
  icon: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 8,
    margin: 8,
  },
  clothes: {
    color: colors.white,
    fontSize: RFValue(10),
    paddingRight: 200,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 5,
  },
  prices: {
    flexDirection: 'row',
    marginLeft: 5,
  },
})
