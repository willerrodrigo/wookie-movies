import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

import { AppNavigator } from 'navigators';
import { AppProviders } from 'providers';
import { customFontsToLoad } from 'theme';

export default function App() {
  const [areFontsLoaded, setAreFontsLoaded] = useState(false);

  async function prepare() {
    await Font.loadAsync(customFontsToLoad);

    SplashScreen.hideAsync();
    setAreFontsLoaded(true);
  }

  useEffect(() => {
    prepare();
  }, []);

  if (!areFontsLoaded) return null;

  return (
    <AppProviders>
      <StatusBar style="auto" />
      <AppNavigator />
    </AppProviders>
  );
}
