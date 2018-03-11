
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import 'config/ReactotronConfig';
import TodoList from 'pages/TodoList';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
