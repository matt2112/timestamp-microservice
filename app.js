/* jshint esversion: 6 */

const express = require('express');
const app = express();

const port = process.argv[2] || 3000;
app.get('/', (req, res) => {
    res.send('Hi!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});