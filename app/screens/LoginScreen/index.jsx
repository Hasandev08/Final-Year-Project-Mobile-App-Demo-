import React from 'react'
import { Text, View } from 'react-native'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitButton from '../../components/Forms/SubmitButton'

import * as Yup from 'yup'

import { styles } from './style'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

const LoginScreen = ({ navigation }) => (
  <View style={styles.background}>
    <View style={styles.container}>
      <View style={styles.components}>
        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
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
