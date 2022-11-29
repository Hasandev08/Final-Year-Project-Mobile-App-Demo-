import { StyleSheet } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  product: {
    marginLeft: 25,
  },
  image: {
    width: 150,
    height: 250,
    marginTop: 20,
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
    width: RFPercentage(20),
    paddingLeft: RFPercentage(0.5),
    marginTop: 10,
    marginBottom: 5,
  },
  prices: {
    flexDirection: 'row',
    paddingLeft: RFPercentage(0.5),
  },
})
