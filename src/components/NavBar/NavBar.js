import { useState, useEffect, useContext } from 'react';
import { StyledNavBar, IconsContainer } from './NavBar.styled';
import logo from '../../images/logo.svg';
//import numen from '../../images/numen.svg';  cambiar logo por numen.svg
import Links from './Links';
import SearchInput from './SearchInput';
import UserSlider from './sliders/UserSlider';
import MenuSlider from './sliders/MenuSlider';
import CartSlider from './sliders/CartSlider';
import Button from './Button';
import { ContadorContext } from '../../App';
//import {incrementar} from '../Contador/Contador';
const NavBar = () =>  {
  const [openedMenu, setOpenedMenu] = useState(false);
  const [openedUser, setOpenedUser] = useState(false);
  const [openedSearch, setOpenedSearch] = useState(false);
  const [openedCart, setOpenedCart] = useState(false);
  //const cont = props.incrementar.cont;
  const {cont} = useContext(ContadorContext); //accedemos a los datos del proveedor y devolvemos el valor actual del contecta actual, en este caso contador

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
