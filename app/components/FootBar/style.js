import { StyleSheet } from 'react-native'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.container,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 20,
  },
  search: {
    backgroundColor: colors.bar,
    padding: 15,
    borderRadius: 30,
  },
})
