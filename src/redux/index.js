import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import initState from './states';
import {loginReducers} from './reducer/loginReducer';
import {requestReducers} from './reducer/requestReducer';

const sagaMiddleware = createSagaMiddleware();

const appRedux = combineReducers({
  loginState: loginReducers,
  requestState: requestReducers,
});

function configureStore(initialState = initState) {
  const store = createStore(
    appRedux,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore(initState);
export default store;
