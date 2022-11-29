import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    alignItems: 'center',
    marginTop: RFPercentage(5),
    marginBottom: RFPercentage(2.5),
  },
  heading: {
    color: colors.white,
    fontSize: RFValue(18),
    fontWeight: 'bold',
  },
})
