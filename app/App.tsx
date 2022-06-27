import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Tamagui from './tamagui.config';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/ttf/Inter.ttf'),
  });
  const colorScheme = useColorScheme();

  if (!isLoadingComplete || !loaded) {
    return null;
  } else {
    return (
      <Tamagui.Provider defaultTheme="light">
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
      </Tamagui.Provider>
    );
  }
}
