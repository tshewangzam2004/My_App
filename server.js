// server.js (updated fallback)
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const PRODUCTS = [
  { id: 1, name: 'Aurora Sneakers', price: 79, rating: 4.6, img: 'https://picsum.photos/seed/p1/900/600', description: 'Comfortable, stylish sneakers.' },
  { id: 2, name: 'Nimbus Jacket',    price: 129, rating: 4.8, img: 'https://picsum.photos/seed/p2/900/600', description: 'Lightweight, water-resistant jacket.' },
  { id: 3, name: 'Orbit Headphones',  price: 99, rating: 4.4, img: 'https://picsum.photos/seed/p3/900/600', description: 'Noise-cancelling headphones.' },
  { id: 4, name: 'Lumen Backpack',    price: 59, rating: 4.2, img: 'https://picsum.photos/seed/p4/900/600', description: 'Durable backpack with laptop pocket.' },
  { id: 5, name: 'Sol Glasses',       price: 39, rating: 4.1, img: 'https://picsum.photos/seed/p5/900/600', description: 'Polarized sunglasses.' },
  { id: 6, name: 'Pulse Watch',       price: 149, rating: 4.7, img: 'https://picsum.photos/seed/p6/900/600', description: 'Smartwatch with long battery.' }
];

app.get('/api/products', (req, res) => {
  res.json(PRODUCTS);
});

/**
 * Fallback: use middleware to serve index.html for any unmatched route.
 * This avoids path-to-regexp parsing of tokens like '*' which caused the error.
 */
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running: http://localhost:${PORT}`);
});
