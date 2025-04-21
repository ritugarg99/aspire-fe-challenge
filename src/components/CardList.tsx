import React, { useState } from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import { useCards } from '../context/CardContext';
import Card from './Card';
import eyeIcon from '../assets/remove_red_eye-24px.svg';
import nextIcon from '../assets/next.svg';
import freezeCardIcon from '../assets/Freeze card.svg';
import spendLimitIcon from '../assets/Set spend limit.svg';
import gPayIcon from '../assets/GPay.svg';
import replaceCardIcon from '../assets/Replace card.svg';
import deactivateCardIcon from '../assets/Deactivate card.svg';
import cardDetailsIcon from '../assets/Group 11889.svg';
import recentTransactionsIcon from '../assets/Group 11889-1.svg';
import fileStorageIcon from '../assets/file-storage.svg';
import flightsIcon from '../assets/flights.svg';
import megaphoneIcon from '../assets/megaphone.svg';
import businessIcon from '../assets/business-and-finance.svg';
import downArrowIcon from '../assets/down-arrow.svg';
import aspireLogo from '../assets/Aspire Logo.svg';

const Container = styled.div`
  flex: 1;
  padding: 60px;
  background: white;
  min-width: 1026px;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Balance = styled.div`
  margin-bottom: 30px;
  
  .label {
    font-size: 14px;
    color: #0C365A;
    margin-bottom: 20px;
  }
  
  .amount {
    font-size: 24px;
    color: #0C365A;
    display: flex;
    align-items: center;
    gap: 8px;
    
    .currency {
      font-size: 13px;
      padding: 4px 8px;
      background: #01D167;
      border-radius: 4px;
      color: white;
    }
    .amount-value {
      font-weight: 700;
      font-size: 26px;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid rgba(12, 54, 90, 0.1);
  margin-bottom: 30px;
  padding: 0px 24px 0px 0px;
  background: white;
`;

const Tab = styled.div<{ active?: boolean }>`
  padding-bottom: 5px;
  color: #0C365A;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? '#01D167' : 'transparent'};
  opacity: ${props => props.active ? 1 : 0.4};
  font-weight: 600;
  font-family: avenir next;

`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;
  width: 906px;
  background: white;
  border-radius: 14px;
  padding: 30px;
  box-shadow: 0px 2px 12px rgba(50, 91, 175, 0.15);
`;

const LeftSection = styled.div`
  width: 414px;
  margin: 0 45px 0 0;

`;

const RightSection = styled.div`
  width: 366px;
  background: white;
  display: inline-flex;
  flex-direction: column;
  border-radius: 14px;
  height: fit-content;
  margin-top: 30px;
`;

const CardSection = styled.div`
  background: white;
  border-radius: 14px;
  padding: 30px;
  padding-top: 0px;
  padding-left: 10px;
  margin-bottom: 20px;
`;

const CardControls = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 2px;
`;

const ShowCardNumber = styled.button`
  background: none;
  border: none;
  color: #01D167;
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  
  img {
    margin-right: 6px;
  }
`;

const CardActions = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 4px;
  padding: 15px;
  background: #EDF3FF;
  border-radius: 10px;
`;

const ActionButton = styled.button<{ frozen?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.frozen ? '#01D167' : '#325BAF'};
  font-size: 13px;
  
  img {
    width: 24px;
    height: 24px;
    margin-bottom: 8px;
  }
`;

const DetailSection = styled.div<{ isOpen?: boolean }>`
  padding: 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: #F5F9FF;
  border: 1px solid #F5F5F5;

  .title {
    color: #0C365A;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 13px;
  }

  .icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
  }

  .arrow {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:first-child {
    // border-radius: 14px 14px 0 0;
  }
`;

const TransactionSection = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${props => props.isOpen ? '20px' : '0 20px'};
  background: white;
  border-left: 1px solid #F0F0F0;
  border-right: 1px solid #F0F0F0;
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(12, 54, 90, 0.1);
  
  .left {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .icon {
    width: 48px;
    height: 48px;
    background: #00D6B51A;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .details {
    .merchant {
      font-size: 14px;
      color: #222222;
      margin-bottom: 4px;
    }
    
    .description {
      font-size: 13px;
      color: #325BAF;
      display: flex;
      align-items: center;
      gap: 6px;
      
      img {
        width: 12px;
        height: 12px;
      }
    }
  }
  
  .right {
    text-align: right;
    
    .amount {
      font-size: 14px;
      color: #222222;
      font-weight: 500;
      margin-bottom: 4px;
      
      &.credit {
        color: #01D167;
      }
    }
    
    .date {
      font-size: 13px;
      color: #AAAAAA;
    }
  }
`;

const ViewAllLink = styled.div`
  color: #01D167;
  font-size: 13px;
  text-align: center;
  padding: 18px;
  cursor: pointer;
  font-weight: 500;
  background: rgba(1, 209, 103, 0.1);
  border-radius: 0 0 14px 14px;
`;

const CarouselContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
`;

const CarouselDot = styled.div<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? '#01D167' : '#01D16730'};
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const SwipeableViewsContainer = styled.div`
  .react-swipeable-view-container {
    align-items: center;
  }
`;

const NewCardButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background: #325BAF;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 60px;
  margin-top: 60px;
`;

const CardList: React.FC = () => {
  const { cards, freezeCard, unfreezeCard } = useCards();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransactionsOpen, setIsTransactionsOpen] = useState(false);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleFreezeToggle = (cardId: string, currentlyFrozen: boolean) => {
    if (currentlyFrozen) {
      unfreezeCard(cardId);
    } else {
      freezeCard(cardId);
    }
  };

  const toggleTransactions = () => {
    setIsTransactionsOpen(!isTransactionsOpen);
  };

  return (
    <Container>
      <Header>
        <Balance>
          <div className="label">Available balance</div>
          <div className="amount">
            <span className="currency">S$</span>
            <span className="amount-value">3,000</span>
          </div>
        </Balance>
        
        <Tabs>
          <Tab active>My debit cards</Tab>
          <Tab>All company cards</Tab>
        </Tabs>
      </Header>

      <MainContent>
        <LeftSection>
          <CardSection>
            <CardControls>
              <ShowCardNumber >
                <img src={eyeIcon} alt="eye" />
                {'Show card number'}
              </ShowCardNumber>
            </CardControls>

            <CarouselContainer>
              <SwipeableViewsContainer>
                <SwipeableViews
                  enableMouseEvents
                  index={activeIndex}
                  onChangeIndex={handleSlideChange}
                  style={{ padding: '10px 0' }}
                >
                  {cards.map((card) => (
                    <div key={card.id}>
                      <Card card={card} showNumber={false} />
                    </div>
                  ))}
                </SwipeableViews>
              </SwipeableViewsContainer>
              
              <CarouselIndicators>
                {cards.map((_, index) => (
                  <CarouselDot
                    key={index}
                    active={index === activeIndex}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </CarouselIndicators>
            </CarouselContainer>

            <CardActions>
              <ActionButton
                onClick={() => handleFreezeToggle(cards[activeIndex].id, cards[activeIndex].frozen)}
                frozen={cards[activeIndex].frozen}
              >
                <img src={freezeCardIcon} alt="Freeze card" />
                {cards[activeIndex].frozen ? 'Unfreeze card' : 'Freeze card'}
              </ActionButton>
              <ActionButton>
                <img src={spendLimitIcon} alt="Set limit" />
                Set spend limit
              </ActionButton>
              <ActionButton>
                <img src={gPayIcon} alt="Add to GPay" />
                Add to GPay
              </ActionButton>
              <ActionButton>
                <img src={replaceCardIcon} alt="Replace card" />
                Replace card
              </ActionButton>
              <ActionButton>
                <img src={deactivateCardIcon} alt="Cancel card" />
                Cancel card
              </ActionButton>
            </CardActions>
          </CardSection>
        </LeftSection>

        <RightSection>
          <DetailSection>
            <span className="title">
              <img src={cardDetailsIcon} alt="" className="icon" />
              Card details
            </span>
            <img src={downArrowIcon} alt="v" className="arrow" />
          </DetailSection>
          <DetailSection isOpen={isTransactionsOpen} onClick={toggleTransactions} style={{ marginTop: '20px' }}>
            <span className="title">
              <img src={recentTransactionsIcon} alt="" className="icon" />
              Recent transactions
            </span>
            <img src={downArrowIcon} alt="v" className="arrow" style={{ transform: isTransactionsOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
          </DetailSection>

          <TransactionSection isOpen={isTransactionsOpen}>
            <Transaction>
              <div className="left">
                <div className="icon">
                  <img src={fileStorageIcon} alt="File storage" />
                </div>
                <div className="details">
                  <div className="merchant">Hamleys</div>
                  <div className="description">
                    <div style={{ background: '#325BAF', padding: '8px 7px', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={businessIcon} alt="Refund" style={{ width: '10px', height: '7.86px' }} />
                    </div>
                    Refund on debit card
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="amount credit">+S$ 150</div>
                <div className="date">20 May 2020</div>
              </div>
            </Transaction>
            <Transaction>
              <div className="left">
                <div className="icon">
                  <img src={flightsIcon} alt="Flights" />
                </div>
                <div className="details">
                  <div className="merchant">Hamleys</div>
                  <div className="description">
                    <div style={{ background: '#325BAF', padding: '8px 7px', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={businessIcon} alt="Charged" style={{ width: '10px', height: '7.86px' }} />
                    </div>
                    Charged to debit card
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="amount">-S$ 150</div>
                <div className="date">20 May 2020</div>
              </div>
            </Transaction>
            <Transaction>
              <div className="left">
                <div className="icon">
                  <img src={megaphoneIcon} alt="Megaphone" />
                </div>
                <div className="details">
                  <div className="merchant">Hamleys</div>
                  <div className="description">
                    <div style={{ background: '#325BAF', padding: '8px 7px', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={businessIcon} alt="Charged" style={{ width: '10px', height: '7.86px' }} />
                    </div>
                    Charged to debit card
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="amount">-S$ 150</div>
                <div className="date">20 May 2020</div>
              </div>
            </Transaction>
          </TransactionSection>

          <ViewAllLink>View all card transactions</ViewAllLink>
        </RightSection>
      </MainContent>
    </Container>
  );
};

export default CardList; 
