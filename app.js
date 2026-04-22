const express = require('express');
const app = express();
const PORT = 3000;

// Static files (CSS og myndir)
app.use(express.static('public'));

// Routes
const matseðillRoutes = require('./routes/matseðill');
const gullfossRoutes = require('./routes/gullfoss');

app.use('/', matseðillRoutes);
app.use('/gullfoss', gullfossRoutes);

app.listen(PORT, () => {
    console.log(`Vefþjónninn keyrir á http://localhost:${PORT}`);
});