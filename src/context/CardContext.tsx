import React, { createContext, useContext, useState, useEffect } from 'react';
import { Card, CardContextType } from '../types';
import { v4 as uuidv4 } from 'uuid';

const generateRandomCardNumber = () => {
  return Array(4).fill(0).map(() => 
    Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  ).join(' ');
};

const generateExpiryDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 3);
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear().toString().slice(-2)}`;
};

const generateCVV = () => {
  return Math.floor(Math.random() * 1000).toString().padStart(3, '0');
};

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>(() => {
    const savedCards = localStorage.getItem('cards');
    return savedCards ? JSON.parse(savedCards) : [
      {
        id: uuidv4(),
        cardholderName: 'Mark Henry',
        cardNumber: generateRandomCardNumber(),
        expiryDate: generateExpiryDate(),
        cvv: generateCVV(),
        frozen: false
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const addCard = (cardholderName: string) => {
    const newCard: Card = {
      id: uuidv4(),
      cardholderName,
      cardNumber: generateRandomCardNumber(),
      expiryDate: generateExpiryDate(),
      cvv: generateCVV(),
      frozen: false
    };
    setCards([...cards, newCard]);
  };

  const freezeCard = (cardId: string) => {
    setCards(cards.map(card => 
      card.id === cardId ? { ...card, frozen: true } : card
    ));
  };

  const unfreezeCard = (cardId: string) => {
    setCards(cards.map(card => 
      card.id === cardId ? { ...card, frozen: false } : card
    ));
  };

  const setSpendLimit = (cardId: string, limit: number) => {
    setCards(cards.map(card => 
      card.id === cardId ? { ...card, spendLimit: limit } : card
    ));
  };

  return (
    <CardContext.Provider value={{ cards, addCard, freezeCard, unfreezeCard, setSpendLimit }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCards = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCards must be used within a CardProvider');
  }
  return context;
}; 