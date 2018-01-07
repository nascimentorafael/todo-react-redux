import React, { Component } from 'react';
import TodoList from './Containers/TodoList';
import { NavigatorIOS } from 'react-native';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import reducer from './Redux/reducers/reducer';

const configureStore = (initalState) => {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      logger,
    ),
  );
  return createStore(reducer, initalState, enhancer);
}

const store = configureStore({
  todos: [
    {
      title: 'Finish RN app',
      id: 0,
    },
    {
      title: 'Buy batteries',
      id: 1,
    },
    {
      title: 'Go to tennis class',
      id: 2,
    },
  ]
});

class App extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: TodoList,
          title: 'My To Do List',
          passProps: { store },
        }}
        style={{flex: 1}}
        barTintColor='steelblue'
        titleTextColor='white'
      />
    );
  }
}

export default App;
