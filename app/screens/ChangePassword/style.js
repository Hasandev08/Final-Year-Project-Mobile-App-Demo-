import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.black,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  components: {
    marginTop: 20,
  },
  changeButton: {
    alignItems: 'center',
    marginTop: 15,
  },
})
