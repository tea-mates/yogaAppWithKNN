const PORT = 8080;
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () =>
  console.log(`

        Listening on port ${PORT}

        http://localhost:${PORT}/

    `)
);
