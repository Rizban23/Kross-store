import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

const ShopCart = ({ cart }) => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Корзина
      </Typography>
      {cart && cart.length > 0 ? ( // бар же жок экенин текшеруу
        <List>
          {cart.map((item) => (
            <React.Fragment key={item.id}> 
              <ListItem>
                <ListItemText
                  primary={item.name}
                  secondary={`Цена: ${item.price}₽`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      ) : (
        <Typography variant="body1">Ваша корзина пуста</Typography>
      )}
    </div>
  );
};

export default ShopCart;
