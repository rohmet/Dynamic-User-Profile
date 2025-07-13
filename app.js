const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', message: 'Hello, EJS!' });
});

app.get('/profil', (req, res) => {
  const profil = {
    nama: 'Lee jeno',
    email: 'jeno@gmail.com',
    // hobi: ['Membaca', 'Koding', 'Musik']
    hobi: []
  };
  res.render('profil', { title:'Profil', profil });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
