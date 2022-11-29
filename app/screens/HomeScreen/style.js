import { StyleSheet } from 'react-native'

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

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
    marginLeft: RFPercentage(2.5),
    paddingRight: 100,
  },
  subheading: {
    color: colors.white,
    marginLeft: RFPercentage(3),
    marginTop: RFPercentage(2.5),
    fontSize: RFValue(14),
    fontWeight: '500',
  },
  categoryButtons: {
    marginLeft: RFPercentage(3),
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.loginButton,
    width: RFPercentage(9),
    height: RFPercentage(6.5),
    borderRadius: RFPercentage(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: RFPercentage(2),
    marginRight: RFPercentage(1.5),
  },
  subButton: {
    backgroundColor: colors.container,
    width: RFPercentage(9),
    height: RFPercentage(6.5),
    borderRadius: RFPercentage(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: RFPercentage(2),
    marginRight: RFPercentage(1.5),
  },
  text: {
    color: colors.white,
    fontSize: RFValue(10),
    fontWeight: 'bold',
  },
})
