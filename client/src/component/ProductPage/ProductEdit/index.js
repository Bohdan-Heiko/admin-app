import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, NumberInput } from 'react-admin'


const ProductEdit = (props) => {

  return (
    <Edit title='Edit post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='productname' required />
        <TextInput source='model' required />
        <TextInput multiline source='description' />
        <NumberInput source='price' placeholder='$' required />
        <TextInput source='diagonal' required />
        <TextInput initialValue="No" source='nfc' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Edit>
  )
}

export default ProductEdit;