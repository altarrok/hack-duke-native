import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Colors from './constants/Colors';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Store from './store/Store';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={Store.reduxStore}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar backgroundColor={Colors.light.background} />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
