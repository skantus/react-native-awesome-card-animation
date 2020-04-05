import React from 'react';
import AppNavigator from 'src/components/AppNavigator';

const App: () => React.ReactNode = () => {
  return <AppNavigator />;
};

export default App;

console.ignoredYellowBox = ['ReactNativeFiberHostComponent', '`getNode()`'];
