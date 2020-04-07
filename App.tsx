import React from 'react';
import AppNavigator from 'src/components/AppNavigator';

const App: () => React.ReactNode = () => {
  return <AppNavigator />;
};

export default App;

// Disabled yellow box from core RN lib.
console.disableYellowBox = true;
