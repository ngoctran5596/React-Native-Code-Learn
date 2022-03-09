
import { MainNavigation } from '@navigation';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistor, store } from '@store';
import { PersistGate } from 'redux-persist/integration/react';

import { LogBox, YellowBox } from 'react-native';


const App = () => (
  <Provider store={store}>
    <PersistGate loading={null}  persistor={persistor}>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </PersistGate>
  </Provider>

);

LogBox.ignoreAllLogs();

export default App;
