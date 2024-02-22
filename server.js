const express = require('express');
const app = express();
require('dotenv').config();
const titreRoutes = require('./src/routes/titreRoutes');

app.use('/api', titreRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
