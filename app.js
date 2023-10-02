const express = require('express');

const app = express();

app.use(express.static('public'))

app.listen(() => {
    console.log("App running");
})