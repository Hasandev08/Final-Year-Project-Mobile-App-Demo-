import React from 'react'
import { Formik } from 'formik'

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => (
  <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {() => <>{children}</>}
  </Formik>
)

export default AppForm
