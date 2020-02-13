import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';

export default function Home() {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text>Home</Text>

      <Link to="dashboard">
        <Text>Go to Dashboard</Text>
      </Link>

      <Link to="posts">
        <Text>Go to Posts</Text>
      </Link>
    </View>
  );
}
