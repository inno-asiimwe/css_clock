const express = require('express');
const compression = require('compress');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
