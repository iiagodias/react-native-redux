import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from 'styled-components';
import Root from './routes';
import { persistor, store } from './stores';
import { light } from './themes';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={light}>
          <Root />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
