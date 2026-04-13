require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'OpenCRO - FDA Cybersecurity'
  });
});

app.get('/clear', (req, res) => {
  res.render('clear', {
    title: 'Get FDA-Ready - OpenCRO'
  });
});

app.get('/model', (req, res) => {
  res.render('model', {
    title: 'Start with a Model - OpenCRO'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`OpenCRO server running on http://localhost:${PORT}`);
});
