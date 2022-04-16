import { useState, useEffect } from 'react';
import Links from './Links';
import UserSlider from './UserSlider';
import MenuSlider from './MenuSlider';
import SearchInput from './SearchInput';
import MenuBtn from './MenuBtn';
import UserBtn from './UserBtn';
import SearchBtn from './SearchBtn';
import { StyledNavBar, IconsContainer } from './NavBar.styled';
import logo from '../../images/logo.svg';
import CartBtn from './CartBtn';
import CartSlider from './CartSlider';

const NavBar = () => {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [openedUser, setOpenedUser] = useState(false);
  const [openedSearch, setOpenedSearch] = useState(false);
  const [openedCart, setOpenedCart] = useState(false);

  useEffect(() => {
    if (openedMenu) {
      setOpenedSearch(false);
      setOpenedUser(false);
      setOpenedCart(false);
    }
    if (openedUser) {
      setOpenedMenu(false);
      setOpenedSearch(false);
      setOpenedCart(false);
    }
    if (openedSearch) {
      setOpenedUser(false);
      setOpenedMenu(false);
      setOpenedCart(false);
    }
    if (openedCart) {
      setOpenedMenu(false);
      setOpenedSearch(false);
      setOpenedUser(false);
    }
  }, [openedMenu, openedUser, openedSearch]);

  const menuHandler = () => setOpenedMenu(prevState => !prevState);
  const userHandler = () => setOpenedUser(prevState => !prevState);
  const searchHandler = () => setOpenedSearch(prevState => !prevState);
  const cartHandler = () => setOpenedCart(prevState => !prevState);

  return (
    <StyledNavBar>
      <img src={logo} alt='Dev logo' />
      <Links />
      <IconsContainer>
        <SearchInput opened={openedSearch} />
        <SearchBtn opened={openedSearch} onClick={searchHandler} />
        <UserBtn opened={openedUser} onClick={userHandler} />
        <CartBtn onClick={cartHandler} counter={2} />
        <MenuBtn opened={openedMenu} onClick={menuHandler} />
      </IconsContainer>
      <MenuSlider opened={openedMenu} />
      <UserSlider opened={openedUser} />
      <CartSlider opened={openedCart} />
    </StyledNavBar>
  );
};

export default NavBar;
