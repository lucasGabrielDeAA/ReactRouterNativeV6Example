import React from 'react';
import {View, Text} from 'react-native';
import {Link, Outlet} from 'react-router-native';

export default function PostList() {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text>Post's list</Text>

      <Link to="123">
        <Text>Post's detail</Text>
      </Link>

      <Link to="new">
        <Text>New post</Text>
      </Link>

      <Outlet />
    </View>
  );
}
