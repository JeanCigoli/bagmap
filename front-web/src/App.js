import React from 'react';
import Routes from "./routes";
import history from './services/history';
import GlobalStyle from "./style/global";

import { Router } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <Router history={history}>
          <Routes />
          <ToastContainer
            style={{ zIndex: "999" }}
            position="bottom-right"
            autoClose={7000}
            className="toast"
          />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
