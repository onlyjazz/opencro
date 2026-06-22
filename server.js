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

app.get('/downloads', (req, res) => {
  res.render('downloads', {
    title: 'OpenCRO Downloads - Free Resources & Threat Modeling Guides',
    ogTitle: 'Download MedTech Threat Modeling Guides - OpenCRO',
    ogDescription: 'Free business threat modeling guide for medical device companies. Download FDA compliance resources and cybersecurity frameworks from OpenCRO.'
  });
});

// Sitemap for SEO
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://opencro.com/</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://opencro.com/downloads</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://opencro.com/pricing</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://opencro.com/assure</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://opencro.com/model</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://opencro.com/operate</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://opencro.com/stress-test</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://opencro.com/fda-cyber</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://opencro.com/patient-safety</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://opencro.com/foundation</loc>
    <lastmod>2024-06-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`);
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
  console.log(`OpenCRO server running on http://localhost:${PORT}`);
});
