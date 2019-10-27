const express = require('express');
const app = express();
const PORT = 3020;

app.get('/', (req, res) => {
    res.send('<p>1111</p>');
});

app.listen(PORT, () => console.log(`express is started on ${PORT}`));