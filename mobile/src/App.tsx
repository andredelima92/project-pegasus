import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Routes from './Routes/index.routes';
import RNBootSplash from 'react-native-bootsplash';

import { Container } from './styles';

const App: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);

  return (
    <Container>
      <StatusBar />
      <Routes />
    </Container>
  );
};

export default App;
