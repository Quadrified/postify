import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import configureStore from './src/redux/Store';
import EntryPoint from './src/EntryPoint';
import theme from './src/themes/AppTheme';

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
