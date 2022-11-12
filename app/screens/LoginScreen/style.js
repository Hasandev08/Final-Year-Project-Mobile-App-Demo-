import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    justifyContent: 'flex-end',
    flex: 1,
  },
  container: {
    flex: 0.5,
    backgroundColor: colors.loginContainer,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  components: {
    marginTop: 20,
  },
  row: {
    alignItems: 'flex-end',
    marginHorizontal: 30,
  },
  phrase: {
    fontSize: RFValue(10),
    color: colors.white,
    marginTop: 25,
  },
  loginButton: {
    alignItems: 'center',
  },
  footer: {
    alignItems: 'center',
    marginTop: 50,
  },
  account: {
    color: colors.white,
  },
  signup: {
    color: colors.loginButton,
  },
})
