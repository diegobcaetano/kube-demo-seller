const express = require('express');
const app = express();
//abcd
app.get('/', (req, res) => {
    res.json({
        id: 123,
        name: "MyRandomSeller2",
        description: "SellerInfo"
    })
});

const server = app.listen(3000, '0.0.0.0', () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
