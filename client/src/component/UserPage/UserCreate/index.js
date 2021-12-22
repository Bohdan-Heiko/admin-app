import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'


const UserCreate = (props) => {
  console.log(props);
  return (
    <Create title='Create new User' {...props}>
      <SimpleForm>
        <TextInput source='name' />
        <TextInput source='email' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate;