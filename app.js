const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', message: 'Hello, EJS!' });
});

const profil = {
  nama: 'Lee jeno',
  email: 'jeno@gmail.com',
  // hobi: ['Membaca', 'Koding', 'Musik']
  hobi: []
};

app.get('/profil', (req, res) => {
  res.render('profil', { title:'Profil', profil });
});

app.post('/tambah-hobi', (req, res) => {
  const hobiBaru = req.body.hobiBaru;
  if (hobiBaru){
    profil.hobi.push(hobiBaru);
  }
  res.redirect('/profil');
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
