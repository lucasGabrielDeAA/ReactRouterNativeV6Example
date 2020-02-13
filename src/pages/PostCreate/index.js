import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Link, useNavigate} from 'react-router-native';

export default function PostCreate() {
  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigate('posts');
  }, [navigate]);

  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
      <Text>Create new post</Text>

      <TouchableOpacity onPress={() => navigate('posts')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
