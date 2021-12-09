import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './component/PostList';
import PostCreate from './component/PostCreate';

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')} >
      <Resource name='posts' list={PostList} create={PostCreate} />
    </Admin>
  );
}

export default App;
