const express = require('express');
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
const profil = require('./data');
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', message: 'Hello, EJS!' });
});

app.get('/profil', async (req, res) => {
  try {
    const dataProfil = await ambilDataProfil();
    res.render('profil', { title: 'Profil', profil: dataProfil });
  } catch (err) {
    console.log(err);
    res.status(500).send("Terjadi kesalahan pada server");
  }
});

app.post('/tambah-hobi', (req, res) => {
  const hobiBaru = req.body.hobiBaru;
  if (hobiBaru){
    profil.hobi.push(hobiBaru);
  }
  res.redirect('/profil');
})

function ambilDataProfil() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(profil);
    }, 1500);
  });
}

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
