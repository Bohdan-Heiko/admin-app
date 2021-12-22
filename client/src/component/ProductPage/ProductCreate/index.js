import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, NumberInput, BooleanField, NullableBooleanInput } from 'react-admin'


const validateUserCreation = (values) => {
  const errors = {};
  if (!values.productname) {
    errors.productname = 'The productname is required';
  }
 
  return errors
};

const ProductCreate = (props) => {

  return (
    <Create title='Create new post' {...props}>
      <SimpleForm >
        <TextInput source='productname' required />
        <TextInput source='model' required />
        <TextInput multiline source='description' />
        <NumberInput source='price' placeholder='$' required />
        <TextInput source='diagonal' required />
        <NullableBooleanInput label="NFC" source="nfc" falseLabel="No"
          trueLabel="Yes" />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default ProductCreate;