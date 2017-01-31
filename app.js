/* jshint esversion: 6, node: true */

'use strict';

const express = require('express');
const app = express();

const port = process.argv[2] || 3000;

// If no date parameter passed to API, then just display the static index.html.
app.use(express.static(__dirname + '/public'));

app.get('/:time', (req, res) => {
    let param = req.params.time;
    const re = /\d/;
    // Check whether a natural date or a unix date has been provided.
    const isNum = re.test(param[0]);
    // Date constructor expects number in milliseconds, so if date is in unix
    // format it needs to be converted first.
    if (isNum) param = Number(param * 1000);
    const time = new Date(param);
    let natural, unix;
    if (time.toString() === 'Invalid Date') {
        unix = null;        
        natural = null;
    } else {
        // Divide by 1000 to get seconds from milliseconds.
        unix = time.getTime() / 1000;
        // Months need to be defined manually as no inbuilt function to get month as word from Date object.
        const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
        natural = monthNames[time.getMonth()] + ' ' + time.getDate() + ', ' + time.getFullYear();        
    }
    const response = {
        unix,
        natural
    };
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});