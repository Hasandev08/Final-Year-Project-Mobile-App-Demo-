import React from 'react'
import { Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import AppForm from '../../components/Forms/AppForm'
import AppFormField from '../../components/Forms/AppFormField'
import SubmitButton from '../../components/Forms/SubmitButton'

import * as Yup from 'yup'

import colors from '../../config/colors'
import { styles } from './style'

const validationSchema = Yup.object().shape({
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

function ChangePassword(props) {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={{ color: colors.white, fontSize: RFValue(18) }}>Change Password</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.components}>
          <AppForm
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
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
            <View style={styles.changeButton}>
              <SubmitButton title='Change' />
            </View>
          </AppForm>
        </View>
      </View>
    </View>
  )
}

export default ChangePassword
