import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './app/Store';
import EntryPoint from './app/EntryPoint';
import theme from './app/themes/AppTheme';

const App = () => {
  const { store } = configureStore();
  return (
    <>
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <EntryPoint />
        </PaperProvider>
      </StoreProvider>
    </>
  );
};

export default App;
