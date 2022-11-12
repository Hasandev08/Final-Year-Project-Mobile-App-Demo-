import React from 'react'
import { Text, View } from 'react-native'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitButton from '../../components/Forms/SubmitButton'

import * as Yup from 'yup'

import { styles } from './style'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
})

function ForgotPassword(props) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.header}>Forgot Password</Text>
        <Text style={styles.paragraph}>
          Enter your email address associated with your account. We will send OTP to reset your
          password
        </Text>
      </View>
      <AppForm
        initialValues={{ email: '' }}
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
        <View style={styles.submit}>
          <SubmitButton title='Submit' />
        </View>
      </AppForm>
    </View>
  )
}

export default ForgotPassword
