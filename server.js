const express = require('express'); 
// TODO: add import for db 
// const db = require(''); 
// TODO: add import for routes
// const routes = require('');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);

// functions like the sequelize start, db connection
db.once('open', () => { 
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
