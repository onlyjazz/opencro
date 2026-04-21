require('dotenv').config();
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('layout', 'layout');

// Middleware
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Real-world MedTech cybersecurity - survive the real world'
  });
});

app.get('/clear', (req, res) => {
  res.render('clear', {
    title: 'Get FDA-Ready - OpenCRO'
  });
});

app.get('/model', (req, res) => {
  res.render('model', {
    title: 'Stress-test your system - OpenCRO'
  });
});

app.get('/stress', (req, res) => {
  res.render('stress-test', {
    title: 'Stress-test your system - OpenCRO'
  });
});

app.get('/stress-test', (req, res) => {
  res.render('stress-test', {
    title: 'Stress-test your system - OpenCRO'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`OpenCRO server running on http://localhost:${PORT}`);
});
