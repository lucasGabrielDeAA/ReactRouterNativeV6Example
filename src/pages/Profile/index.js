import React from 'react';
import {View, Text} from 'react-native';
import {Link} from 'react-router-native';

export default function Profile() {
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: '#ff0',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text>Profile</Text>

      <Link to="dashboard">
        <Text>Go to Dashboard</Text>
      </Link>
    </View>
  );
}
