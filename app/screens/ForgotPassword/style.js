import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import colors from '../../config/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  header: {
    marginTop: 80,
    color: colors.white,
    fontSize: RFValue(18),
  },
  paragraph: {
    marginVertical: 10,
    lineHeight: 25,
    paddingHorizontal: 50,
    color: colors.tagline,
    textAlign: 'center',
  },
  submit: {
    alignItems: 'center',
  },
})
