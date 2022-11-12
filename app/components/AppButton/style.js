import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.loginButton,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    width: '80%',
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: RFValue(14),
  },
})
