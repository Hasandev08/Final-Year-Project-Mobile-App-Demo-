import { View, StyleSheet } from 'react-native'

import LoginScreen from './app/screens/LoginScreen'

import colors from './app/config/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: 'flex-end',
  },
})
