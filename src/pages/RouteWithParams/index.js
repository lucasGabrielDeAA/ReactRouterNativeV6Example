import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useParams, useNavigate} from 'react-router-native';

export default function RouteWithParams() {
  const navigate = useNavigate();
  const {id} = useParams();

  const handleBackNavigate = useCallback(() => {
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
      <Text>{`Route's ID ${id}`}</Text>

      <TouchableOpacity onPress={handleBackNavigate}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
