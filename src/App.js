import React from 'react';
import {NativeRouter} from 'react-router-native';

import Routes from './routes';

export default function App() {
  return (
    <NativeRouter>
      <Routes />
    </NativeRouter>
  );
}
