import styled from 'styled-components';
import { FixedWrapper } from '../../shared/components/FixedWrapper';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileWrapper } from '../../shared/components/MobileWrapper';
import logo1 from  '../../assets/gazi-logo.png';
interface MainHeaderProps {
  actions: React.ReactNode;
}

export const MainHeader = ({  actions }: MainHeaderProps) => {
  return (
    <FixedWrapper>
      <Header>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to="/">
              <Logo  src={logo1}/>
            </Link>
          </LogoWrapper>
          <Actions>
            <MobileWrapper
              mobileChildren={
                <StyledIconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => console.log('click')}
                >
                  <StyledMenuIcon />
                </StyledIconButton>
              }
            >
              <ActionList>{actions}</ActionList>
            </MobileWrapper>
          </Actions>
        </HeaderWrapper>
      </Header>
    </FixedWrapper>
  );
};

const Logo = styled.img`
  width:120px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7rem;
`;

const HeaderWrapper = styled.div`
  padding: 0 1rem;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Actions = styled.div`
  a {
    text-decoration: none;
    color: red;
  }

  p {
    font-weight: 700;
  }
`;

const LogoWrapper = styled.div`
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: red;
  }

  & h1 {
    font-size: 3.6rem;
  }
`;

const ActionList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 5rem;
  margin: 0;
  padding: 0;
`;

const StyledMenuIcon = styled(MenuIcon)`
font-family: 'Poppins', sans-serif;
  font-size: 2.6rem;
  color: red;
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
  margin: 0;
`;
