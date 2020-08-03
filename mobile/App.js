import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import cores from './src/styles/cores';
import { Provider } from "react-redux";
import { store, persistor } from "./src/store";
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={cores.green_darker} />
        <Routes />
      </PersistGate>
    </Provider>
  );
}

