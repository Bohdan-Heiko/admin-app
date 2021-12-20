import React from 'react'
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'


const ProductCreate = (props) => {

  return (
    <Create title='Create new post' {...props}>
      <SimpleForm>
        <TextInput source='productname' />
        <TextInput multiline source='description' />
        <DateInput label='Published' source='publishedAt' />
      </SimpleForm>
    </Create>
  )
}

export default ProductCreate;