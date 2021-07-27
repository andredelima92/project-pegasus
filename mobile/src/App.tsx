import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './Routes/index.routes';

import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Container>
      <StatusBar />
      <Routes />
    </Container>
  );
};

export default App;
