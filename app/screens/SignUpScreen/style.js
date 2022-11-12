import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 25,
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
  login: {
    color: colors.loginButton,
  },
})
