import React from 'react';
import styled from 'styled-components';
import { Card as CardType } from '../types';
import visaLogo from '../assets/Visa Logo.svg';
import aspireLogo from '../assets/Aspire Logo.svg';

const CardContainer = styled.div<{ frozen: boolean }>`
  width: 100%;
  max-width: 414px;
  aspect-ratio: 1.75;
  background: #01D167;
  border-radius: 15px;
  padding: 24px 20px;
  height: 250px;
  position: relative;
  color: white;
  opacity: ${props => props.frozen ? 0.7 : 1};
  transition: opacity 0.3s ease;
  font-family: 'Open Sans', sans-serif;
`;

const AspireLogo = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  height: 21px;
`;

const VisaLogo = styled.img`
  position: absolute;
  bottom: 24px;
  right: 24px;
  height: 20px;
`;

const CardholderName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-top: 55px;
  letter-spacing: 0.5px;
  text-transform: capitalize;
`;

const CardNumber = styled.div`
  font-size: 14px;
  margin-top: 27px;
  margin-bottom: 21px;
  font-weight: 600;
  letter-spacing: 3.5px;
  font-family: 'DM Mono', monospace;
  display: flex;
  gap: 8px;
`;

const CardDetails = styled.div`
  display: flex;
  gap: 50px;
`;

const CardInfo = styled.div`
  display: flex;
  gap: 6px;

  .label {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-family: 'DM Mono', monospace;
  }
  
  .value {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2px;
    font-family: 'DM Mono', monospace;
  }
`;

interface Props {
  card: CardType;
  showNumber: boolean;
}

const Card: React.FC<Props> = ({ card, showNumber }) => {
  const formatCardNumber = (number: string) => {
    const groups = number.split(' ');
    return groups.map((group, i) => 
      showNumber || i === groups.length - 1 ? group : '••••'
    );
  };

  return (
    <CardContainer frozen={card.frozen}>
      <AspireLogo src={aspireLogo} alt="Aspire" />
      <CardholderName>{card.cardholderName}</CardholderName>
      <CardNumber>
        {formatCardNumber(card.cardNumber).map((group, i) => (
          <span key={i}>{group}</span>
        ))}
      </CardNumber>
      <CardDetails>
        <CardInfo>
          <div className="label">Thru:</div>
          <div className="value">{card.expiryDate}</div>
        </CardInfo>
        <CardInfo>
          <div className="label">CVV:</div>
          <div className="value">{showNumber ? card.cvv : '•••'}</div>
        </CardInfo>
      </CardDetails>
      <VisaLogo src={visaLogo} alt="Visa" />
    </CardContainer>
  );
};

export default Card; 