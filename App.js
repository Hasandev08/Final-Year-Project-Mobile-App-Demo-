// import AddressScreen from './app/screens/AddressScreen'
// import ChangePassword from './app/screens/ChangePassword'
// import ForgotPassword from './app/screens/ForgotPassword'
import HomeScreen from './app/screens/HomeScreen'
// import LoginScreen from './app/screens/LoginScreen'
// import SignUpScreen from './app/screens/SignUpScreen'
// import WelcomeScreen from './app/screens/WelcomeScreen'

// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  // const Stack = createNativeStackNavigator()

  return (
    <HomeScreen />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='Home' component={WelcomeScreen} options={{ headerShown: false }} />
    //     <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
    //     <Stack.Screen name='Signup' component={SignUpScreen} options={{ headerShown: false }} />
    //     <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
    //     <Stack.Screen
    //       name='ForgotPassword'
    //       component={ForgotPassword}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name='ChangePassword'
    //       component={ChangePassword}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name='AddressScreen'
    //       component={AddressScreen}
    //       options={{ headerShown: false }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}
