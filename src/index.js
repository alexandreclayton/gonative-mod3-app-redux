
import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import store from 'store';  
import 'config/ReactotronConfig';

const App = () => (
  <Provider store={store}>
    <View />
  </Provider>
);