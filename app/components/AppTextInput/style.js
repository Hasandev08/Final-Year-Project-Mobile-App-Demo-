import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.white,
    borderTopColor: colors.loginContainer,
    borderRightColor: colors.loginContainer,
    borderLeftColor: colors.loginContainer,
    borderWidth: 0.5,
    width: '85%',
    padding: 0,
    marginHorizontal: 30,
  },
  textInput: {
    fontSize: RFValue(12),
    color: colors.white,
    fontWeight: 'bold',
  },
  heading: {
    color: colors.white,
    fontSize: RFValue(10),
    marginLeft: 30,
    marginTop: 30,
  },
})
