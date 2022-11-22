import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'flex-end',
  },
  heading: {
    color: colors.white,
    marginTop: 80,
    fontWeight: '500',
    fontSize: RFValue(26),
    paddingLeft: 25,
    paddingRight: 100,
  },
  subheading: {
    color: colors.white,
    paddingLeft: 35,
    marginTop: 20,
    fontSize: RFValue(14),
    fontWeight: '500',
  },
})
