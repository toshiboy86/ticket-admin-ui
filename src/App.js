
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList } from './posts/list';
import { PostEdit } from './posts/edit';
import { PostCreate } from './posts/post';

import { UserList } from './users';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} icon={PostIcon} />
    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> */}
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);
export default App;