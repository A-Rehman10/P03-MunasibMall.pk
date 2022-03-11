import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import MyApp from './MyApp';
import axios from 'axios';
import {logout} from './src/redux/actions/auth.action';
import UserInactivity from 'react-native-user-inactivity';
const App = () => {
  const UNAUTHORIZED = 401;
  const {dispatch} = store; // direct access to redux store.
  useEffect(() => {
    axios.interceptors.response.use(
      response => response,
      error => {
        const {status} = error.response;
        if (status === UNAUTHORIZED) {
          dispatch(logout());
        }
        return Promise.reject(error);
      },
    );
  }, [dispatch]);
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <UserInactivity
            isActive={true}
            timeForInactivity={600000}
            onAction={() => dispatch(logout())}>
            <MyApp />
          </UserInactivity>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
