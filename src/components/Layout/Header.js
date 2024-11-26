import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Container,
  IconButton,
} from '@mui/material';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Heart from '@mui/icons-material/FavoriteBorder';
import Profile from '@mui/icons-material/AccountCircle';
import '../../styles/HeaderStyles.css';

const Header = () => {
  
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => setOpenCart(true);
  const handleCloseCart = () => setOpenCart(false);

  return (
    <>
      <Box>
        <AppBar
          component={'nav'}
          sx={{
            bgcolor: 'white',
            color: 'black',
            height: '128px',
            borderBottom: '1px solid #EAEAEA',
          }}
        >
          <Toolbar
            sx={{ height: '100%', display: 'flex', alignItems: 'center', gap: 2 }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{ height: '40px', objectFit: 'contain' }}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              KROSS STORE
            </Typography>
            <Box>
              <ul className="navigation-menu">
                <li>
                  <IconButton onClick={handleOpenCart}>
                    <ShoppingCartIcon />
                  </IconButton>
                  <span onClick={handleOpenCart }>Корзинка</span>
                </li>
                <li>
                  <Heart />
                  <Link to={'/'}>Закладки</Link>
                </li>
                <li>
                  <Profile />
                  <Link to={'/'}>Профиль</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

     
      <Dialog open={openCart} onClose={handleCloseCart} fullWidth maxWidth="sm">
        <DialogTitle>Корзинка</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
           Коррзина пуста
          </Typography>
         
          <Box>
           
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCart} color="secondary">
            Закрыть
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert('Переход к оформлению заказа')}
          >
            Оформить заказ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
