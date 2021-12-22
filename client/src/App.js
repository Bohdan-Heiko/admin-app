import React from 'react'
import { Admin, Resource } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import ProductList from './component/ProductPage/ProductList';
import ProductCreate from './component/ProductPage/ProductCreate';
import ProductEdit from './component/ProductPage/ProductEdit';

import UserList from './component/UserPage/UserList';
import UserCreate from './component/UserPage/UserCreate';
import UserEdit from './component/UserPage/UserEdit';

import DashBoard from './component/DashBoard';
import authProvider from './component/AuthProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

import customRoutes from './component/CustomRouter'
const App = () => {

  
  return (
    <Admin customRoutes={customRoutes} dashboard={DashBoard} authProvider={authProvider} dataProvider={simpleRestProvider('http://localhost:3000')} >
      <Resource name='products' list={ProductList} create={ProductCreate} edit={ProductEdit} icon={PostIcon}/>
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon} />
    </Admin>
  );
}

export default App;
