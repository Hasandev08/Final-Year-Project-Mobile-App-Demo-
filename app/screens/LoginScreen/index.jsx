import React from 'react'
import { Image, Text, View } from 'react-native'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitButton from '../../components/Forms/SubmitButton'

import * as Yup from 'yup'

import { styles } from './style'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter valid email').required('Email is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

const LoginScreen = ({ navigation }) => (
  <View style={styles.background}>
    <View style={styles.image}>
      <Image style={styles.logo} source={require('../../../assets/logo.jpeg')}></Image>
    </View>
    <View style={styles.container}>
      <View style={styles.components}>
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={() => navigation.navigate('HomeScreen')}
          validationSchema={validationSchema}
        >
          <AppFormField
            text='Email'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            name='email'
            textContentType='emailAddress'
          />
          <AppFormField
            text='Password'
            autoCapitalize='none'
            autoCorrect={false}
            name='password'
            secureTextEntry
            textContentType='password'
          />
          <View style={styles.row}>
            <Text style={styles.phrase} onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot Password?
            </Text>
          </View>
          <View style={styles.loginButton}>
            <SubmitButton title='Login' />
          </View>
          <View style={styles.footer}>
            <Text style={styles.account}>
              Don't have an account?{' '}
              <Text style={styles.signup} onPress={() => navigation.navigate('Signup')}>
                SIGNUP
              </Text>
            </Text>
          </View>
        </AppForm>
      </View>
    </View>
  </View>
)

export default LoginScreen
