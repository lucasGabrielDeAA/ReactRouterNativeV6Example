import React from 'react';
import {Routes as RoutesContainer, Route} from 'react-router-native';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import PostList from '../pages/PostList';
import PostDetail from '../pages/PostDetail';
import PostCreate from '../pages/PostCreate';

export default function Routes(props) {
  return (
    <RoutesContainer>
      <Route path="/" element={<Home />} />

      <Route path="dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />

      <Route path="posts" element={<PostList />}>
        <Route path="/:id" element={<PostDetail />} />
        <Route path="/new" element={<PostCreate />} />
      </Route>
    </RoutesContainer>
  );
}
