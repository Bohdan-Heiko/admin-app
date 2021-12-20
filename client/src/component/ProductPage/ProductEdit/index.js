import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'


const ProductEdit = (props) => {

  return (
    <Edit title='Edit post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='productname' />
        <TextInput multiline source='description' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default ProductEdit;