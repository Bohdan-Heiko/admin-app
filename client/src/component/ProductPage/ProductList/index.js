import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

import { TestButton } from './Button';


const ProductList = (props) => { 

  console.log(props);
  return (

    <List {...props} >
      <Datagrid >
        <TextField source='id' />
        <TextField source='productname' />
        <TextField source='description' />
        <DateField source='publishedAt' />
        <TestButton title='Product characters' />
        <EditButton basePath='/products' />
        <DeleteButton basePath='/products' />
        
     </Datagrid>
    </List>
  )
}

export default ProductList;