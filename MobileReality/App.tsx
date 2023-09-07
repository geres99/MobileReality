/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './Navigation';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
    flexGrow: 1,
  };

  const AppContainer = () => {
    return (
      <SafeAreaView style={backgroundStyle}>
        <MainNavigation />
      </SafeAreaView>
    );
  };

  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}

export default App;
