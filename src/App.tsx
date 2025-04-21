import React, { useState } from 'react';
import styled from 'styled-components';
import { CardProvider } from './context/CardContext';
import CardList from './components/CardList';
import AddCardModal from './components/AddCardModal';
import Sidebar from './components/Sidebar';
import addIcon from './assets/add.svg';

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

const NewCardButton = styled.button`
  position: absolute;
  top: 80px;
  right: 415px;
  background: #325BAF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 10;
  
  &:hover {
    background: #2A4C94;
  }
`;

const App: React.FC = () => {
  const [showAddCardModal, setShowAddCardModal] = useState(false);

  return (
    <CardProvider>
      <AppContainer>
        <Sidebar />
        <MainContent>
          <NewCardButton onClick={() => setShowAddCardModal(true)}>
            <img src={addIcon} alt="+" width="16" />
            New Card
          </NewCardButton>
          <CardList />
          {showAddCardModal && (
            <AddCardModal onClose={() => setShowAddCardModal(false)} />
          )}
        </MainContent>
      </AppContainer>
    </CardProvider>
  );
};

export default App; 