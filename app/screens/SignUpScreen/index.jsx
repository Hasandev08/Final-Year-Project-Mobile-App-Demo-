import React from 'react'
import { Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import * as Yup from 'yup'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitButton from '../../components/Forms/SubmitButton'

import colors from '../../config/colors'
import { styles } from './style'

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  phoneNumber: Yup.string()
    .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
    .required('Phone number is required'),
  email: Yup.string().email('Please enter valid email').required('Email is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, 'Password must have a special character')
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
})

const SignUpScreen = ({ navigation }) => (
  <View style={styles.background}>
    <View style={styles.header}>
      <Text style={{ color: colors.white, fontSize: RFValue(18) }}>Create Account</Text>
    </View>
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
          <AppFormField
            text='Confirm Password'
            autoCapitalize='none'
            autoCorrect={false}
            name='confirmPassword'
            secureTextEntry
            textContentType='password'
          />
          <View style={styles.loginButton}>
            <SubmitButton title='Signup' />
          </View>
          <View style={styles.footer}>
            <Text style={styles.account}>
              Already have an account?{' '}
              <Text style={styles.login} onPress={() => navigation.navigate('Login')}>
                LOGIN
              </Text>
            </Text>
          </View>
        </AppForm>
      </View>
    </View>
  </View>
)

export default SignUpScreen
