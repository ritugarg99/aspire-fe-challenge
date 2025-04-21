import React from 'react';
import styled from 'styled-components';
import aspireLogo from '../assets/Aspire Logo.svg';
import homeIcon from '../assets/Home.svg';
import cardIcon from '../assets/Card.svg';
import paymentsIcon from '../assets/Payments.svg';
import creditIcon from '../assets/Credit.svg';
import accountIcon from '../assets/Account.svg';

const SidebarContainer = styled.div`
  width: 25%;
  max-width: 340px;
  background: #0C365A;
  height: 100vh;
  padding: 48px 0;
  color: white;
`;

const Logo = styled.img`
  height: 35px;
  margin: 0 30px 20px 48px;
`;

const Subtitle = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.3);
  margin: 0 48px;
`;

const Navigation = styled.nav`
  margin-top: 60px;
`;

const NavItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  margin: 15px 0;
  padding: 15px 48px;
  cursor: pointer;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  
  img {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  
  span {
    font-size: 16px;
    color: ${props => props.active ? '#01D167' : 'rgba(255, 255, 255)'};
  }
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Logo src={aspireLogo} alt="Aspire" />
      <Subtitle>
        Trusted way of banking for 3,000+ SMEs and startups in Singapore
      </Subtitle>
      
      <Navigation>
        <NavItem>
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </NavItem>
        <NavItem active>
          <img src={cardIcon} alt="Cards" />
          <span>Cards</span>
        </NavItem>
        <NavItem>
          <img src={paymentsIcon} alt="Payments" />
          <span>Payments</span>
        </NavItem>
        <NavItem>
          <img src={creditIcon} alt="Credit" />
          <span>Credit</span>
        </NavItem>
        <NavItem>
          <img src={accountIcon} alt="Settings" />
          <span>Settings</span>
        </NavItem>
      </Navigation>
    </SidebarContainer>
  );
};

export default Sidebar; 