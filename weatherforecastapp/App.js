import React, { Component } from 'react';
import { } from 'react-native';
import AppStack from './Page/Root/AppStack';
import { Provider } from 'react-redux';
import{createStore,applyMiddleware} from 'redux'
import { Root } from "native-base";
import createSagaMiddleware from 'redux-saga';
import allReducers  from './reducers';
import mySaga from './sagas';
const sagaMiddleware=createSagaMiddleware();
let store=createStore(allReducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Root>
        <AppStack />

      </Root>
     </Provider>
    );
  }
}

