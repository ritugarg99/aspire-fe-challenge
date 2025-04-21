import React from 'react';
import styled from 'styled-components';
import { CardProvider } from './context/CardContext';
import CardList from './components/CardList';
import Sidebar from './components/Sidebar';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #0C365A;
`;

const MainContent = styled.div`
  flex: 1;
  position: relative;
  background: white;
`;

const App: React.FC = () => {
  return (
    <CardProvider>
      <AppContainer>
        <Sidebar />
        <MainContent>
          <CardList />
        </MainContent>
      </AppContainer>
    </CardProvider>
  );
};

export default App; 