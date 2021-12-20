import React, {useEffect} from 'react'
import { Admin, Resource, fetchUtils } from 'react-admin'
import simpleRestProvider from 'ra-data-simple-rest'
import ProductList from './component/ProductPage/ProductList';
import ProductCreate from './component/ProductPage/ProductCreate';
import ProductEdit from './component/ProductPage/ProductEdit';

import UserList from './component/UserPage/UserList';
import UserCreate from './component/UserPage/UserCreate';
import UserEdit from './component/UserPage/UserEdit';

import DashBoard from './component/DashBoard';
import AuthProvider from './component/AuthProvider';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const App = () => {

  

  const httpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };
  
  return (
    <Admin dashboard={DashBoard} authProvider={AuthProvider} dataProvider={simpleRestProvider('http://localhost:3000')} >
      <Resource name='products' list={ProductList} create={ProductCreate} edit={ProductEdit} icon={PostIcon}/>
      <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon} />
    </Admin>
  );
}

export default App;
