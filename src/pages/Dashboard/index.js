import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useNavigate} from 'react-router';
import {Link} from 'react-router-native';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigateHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text>Dashboard</Text>

      <Link to="profile">
        <Text>Go to Profile</Text>
      </Link>

      <TouchableOpacity onPress={handleNavigateHome}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
