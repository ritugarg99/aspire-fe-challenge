import React, { useState } from 'react';
import styled from 'styled-components';
import { useCards } from '../context/CardContext';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
`;

const Title = styled.h2`
  color: #325BAF;
  margin: 0 0 24px;
  font-size: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  margin-bottom: 16px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #325BAF;
  }
`;

const Button = styled.button`
  background: #325BAF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  
  &:disabled {
    background: #E5E5E5;
    cursor: not-allowed;
  }
  
  &:hover:not(:disabled) {
    background: #2A4C94;
  }
`;

interface Props {
  onClose: () => void;
}

const AddCardModal: React.FC<Props> = ({ onClose }) => {
  const [cardholderName, setCardholderName] = useState('');
  const { addCard } = useCards();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardholderName.trim()) {
      addCard(cardholderName.trim());
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <Title>Add New Card</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Cardholder Name"
            value={cardholderName}
            onChange={e => setCardholderName(e.target.value)}
            required
          />
          <Button type="submit" disabled={!cardholderName.trim()}>
            Add Card
          </Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddCardModal; 