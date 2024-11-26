import React from 'react';
import Layout from '../components/Layout/Layout';
import { Products } from '../data/Data';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// товарды кошуу 
const handleBuyClick = async (productId) => {
  try {
    const response = await fetch('https://api.example.com/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId, 
        quantity: 1, 
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    console.log('Ответ от API:', data);
    alert('Товар успешно добавлен в корзину!');
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error);
    alert('Не удалось добавить товар в корзину. Попробуйте снова.');
  }
};

// товарды корсотуу учун
const ProductCard = ({ product }) => {
  return (
    <Card
      key={product.id}
      sx={{
        maxWidth: '510px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        m: 3,
        position: 'relative',
      }}
    >
      <IconButton
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 1,
          bgcolor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: 1,
        }}
      >
        <FavoriteBorderIcon />
      </IconButton>

    
      <CardMedia
        sx={{ minHeight: '400px', objectFit: 'cover' }}
        component="img"
        src={product.image}
        alt={product.name}
      />

    
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h5" gutterBottom component="div">
          {product.name}
        </Typography>
        <Typography variant="body2">{product.description}</Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Цена: {product.price}₽
        </Typography>
      </CardContent>

   
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleBuyClick(product.id)}
        >
          Купить
        </Button>
      </Box>
    </Card>
  );
};

// Башкы компонент 
const Home = () => {
  return (
    <Layout>
      <Typography variant="h2" sx={{ marginTop: '120px' }}>
        Все кроссовки
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Layout>
  );
};

export default Home;
