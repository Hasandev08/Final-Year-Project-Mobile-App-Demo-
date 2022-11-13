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
  address: Yup.string().required('Address is required'),
  street1: Yup.string().required('Required'),
  street2: Yup.string().required('Required'),
  city: Yup.string().required('City is required'),
  code: Yup.string().required('Code is required'),
})

function AddressScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Text style={{ color: colors.white, fontSize: RFValue(18) }}>Add Address</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.components}>
          <AppForm
            initialValues={{
              address: '',
              street1: '',
              street2: '',
              city: '',
              code: '',
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField text='Address Name' name='address' textContentType='name' />
            <AppFormField
              text='Address line 1'
              name='street1'
              textContentType='streetAddressLine1'
            />
            <AppFormField
              text='Address line 2'
              name='street2'
              textContentType='streetAddressLine2'
            />
            <AppFormField text='City' name='city' textContentType='addressCity' />
            <AppFormField
              text='Area Code'
              name='code'
              textContentType='postalCode'
              keyboardType='numeric'
            />
            <View style={styles.addressButton}>
              <SubmitButton title='Save Address' />
            </View>
          </AppForm>
        </View>
      </View>
    </View>
  )
}

export default AddressScreen
