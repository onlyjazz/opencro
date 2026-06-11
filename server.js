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
    title: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/assure', (req, res) => {
  res.render('assure', {
    title: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/clear', (req, res) => {
  res.render('assure', {
    title: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/foundation', (req, res) => {
  res.render('foundation', {
    title: 'OpenCRO Foundation'
  });
});

app.get('/model', (req, res) => {
  res.render('model', {
    title: 'OpenCRO Model - Identify where your MedTech company breaks'
  });
});
app.get('/operate', (req, res) => {
  res.render('operate', {
    title: 'OpenCRO Operate - Identify where your MedTech company breaks'
  });
});

app.get('/stress', (req, res) => {
  res.render('stress-test', {
    title: 'OpenCRO Stress Test - Identify where your MedTech company breaks'
  });
});

app.get('/stress-test', (req, res) => {
  res.render('stress-test', {
    title: 'OpenCRO Stress Test - Identify where your MedTech company breaks'
  });
});

app.get('/fda-cyber', (req, res) => {
  res.render('fda-cyber', {
    title: 'OpenCRO FDA Cyber - Identify where your MedTech company breaks'
  });
});

app.get('/patient-safety', (req, res) => {
  res.render('patient-safety', {
    title: 'OpenCRO Patient Safety - Identify where your MedTech company breaks'
  });
});

app.get('/assure-revenue', (req, res) => {
  res.render('assure-revenue', {
    title: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/ai-threats', (req, res) => {
  res.render('ai-threats', {
    title: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/get-peace', (req, res) => {
  res.render('get-peace', {
    title: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/assure-ai-revenue', (req, res) => {
  res.render('assure-ai-revenue', {
    title: 'OpenCRO - Identify where your MedTech company breaks',
    ogTitle: 'OpenCRO - Identify where your MedTech company breaks',
    ogDescription: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/assure-revenue-premarket', (req, res) => {
  res.render('assure-revenue-premarket', {
    title: 'OpenCRO - Identify where your MedTech company breaks',
    ogTitle: 'OpenCRO - Identify where your MedTech company breaks',
    ogDescription: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/assure-revenue-deployment', (req, res) => {
  res.render('assure-revenue-deployment', {
    title: 'OpenCRO - Identify where your MedTech company breaks',
    ogTitle: 'OpenCRO - Identify where your MedTech company breaks',
    ogDescription: 'OpenCRO - Identify where your MedTech company breaks'
  });
});

app.get('/pricing', (req, res) => {
  res.render('pricing', {
    title: 'OpenCRO Pricing - Fixed Outcome. Fixed Price.'
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
