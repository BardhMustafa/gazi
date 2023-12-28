import styled from 'styled-components';
import { FixedWrapper } from '../../shared/components/FixedWrapper';
import { Link } from 'react-router-dom';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileWrapper } from '../../shared/components/MobileWrapper';
import { useDrawer } from '../../store/DrawerContext';
import logo1 from '../../assets/gazi-logo.png';

interface MainHeaderProps {
  actions: React.ReactNode;
}

export const MainHeader = ({ actions }: MainHeaderProps) => {
  const { drawer, toggleDrawer } = useDrawer();

  return (
    <FixedWrapper>
      <Header>
        <HeaderWrapper>
          <LogoWrapper>
            <Link to="/">
              <Logo src={logo1} />
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
                  onClick={() => toggleDrawer(true)}
                >
                  <StyledMenuIcon />
                </StyledIconButton>
              }
            >
              <ActionList>{actions}</ActionList>
            </MobileWrapper>
            <Drawer
              anchor="right"
              open={drawer}
              onClose={() => toggleDrawer(false)}
            >
              <ActionList>{actions}</ActionList>
            </Drawer>
          </Actions>
        </HeaderWrapper>
      </Header>
    </FixedWrapper>
  );
};

const Logo = styled.img`
  width: 120px;
`;
const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7rem;
  background-color: #fff;
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

const Actions = styled.nav`
  a {
    text-decoration: none;
    color: #e91b37;
  }

  p {
    font-weight: 700;
  }
`;

const LogoWrapper = styled.div`
  margin-top: 0.7rem;
  a {
    text-decoration: none;
  }
`;

const ActionList = styled.ul`
  width: 300px;
  padding: 1rem;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 5rem;
    list-style: none;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  font-family: 'Poppins', sans-serif;
  font-size: 2.6rem;
  color: #e91b37;
`;

const StyledIconButton = styled(IconButton)`
  padding: 0;
  margin: 0;
`;
