import { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import { StyledNavBar, IconsContainer } from './NavBar.styled';
import Links from './Links';
import SearchInput from './SearchInput';
import UserSlider from './sliders/UserSlider';
import MenuSlider from './sliders/MenuSlider';
import CartSlider from './sliders/CartSlider';
import MenuBtn from './buttons/MenuBtn';
import UserBtn from './buttons/UserBtn';
import SearchBtn from './buttons/SearchBtn';
import CartBtn from './buttons/CartBtn';

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
