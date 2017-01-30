/* jshint esversion: 6, node: true */

'use strict';

const express = require('express');
const app = express();

const port = process.argv[2] || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/:time', (req, res) => {
    const time = req.params.time;
    console.log(time);
    res.send(JSON.stringify({
        test: 'testing'
    }));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});