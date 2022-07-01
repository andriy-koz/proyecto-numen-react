import React, { useState, useEffect, useContext } from 'react';
import { StyledNavBar, IconsContainer, StyledImg } from './NavBar.styled';
import logo from '../../images/numen.png';
import Links from './Links';
import SearchInput from './SearchInput';
import UserSlider from './sliders/UserSlider';
import MenuSlider from './sliders/MenuSlider';
import CartSlider from './sliders/CartSlider';
import Button from './Button';
import { ContadorContext } from '../../App';

// No dejar espacios vacíos, aquí habia 3 renglones vacios

const NavBar = () => {
  // open es mejor que opened
  const [openedMenu, setOpenedMenu] = useState(false);
  const [openedUser, setOpenedUser] = useState(false);
  const [openedSearch, setOpenedSearch] = useState(false);
  const [openedCart, setOpenedCart] = useState(false);

  const { cont } = useContext(ContadorContext);

  // En lugar del useEffect, podrían agregar esta lógica a los handlers, es más performante
  useEffect(() => {
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
  }, [openedUser, openedSearch]);

  const menuHandler = () => {
    setOpenedMenu(prevState => !prevState);
    setOpenedSearch(false);
    setOpenedUser(false);
    setOpenedCart(false);
  };
  const userHandler = () => setOpenedUser(prevState => !prevState);
  const searchHandler = () => setOpenedSearch(prevState => !prevState);
  const cartHandler = () => setOpenedCart(prevState => !prevState);

  return (
    <StyledNavBar>
      <StyledImg src={logo} alt='Numen logo'></StyledImg>
      <Links onClick={cartHandler} counter={cont} />
      {/* En lugar de ocultarlo con media queries, pueden renderizarlos condicionalmente
        en base a ciertos parámetros. Por ejemplo, podrían crear un hook useIsMobile, o useWidth */}
      <IconsContainer>
        <SearchInput opened={openedSearch} />
        <Button type='search' opened={openedSearch} onClick={searchHandler} />
        <Button type='user' opened={openedUser} onClick={userHandler} />
        <Button type='cart' onClick={cartHandler} counter={cont} />
        <Button type='menu' opened={openedMenu} onClick={menuHandler} />
      </IconsContainer>
      <MenuSlider opened={openedMenu} />
      <UserSlider opened={openedUser} />
      <CartSlider opened={openedCart} counter={cont} />
    </StyledNavBar>
  );
};

export default NavBar;
