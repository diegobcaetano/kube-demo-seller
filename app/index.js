const express = require('express');
const app = express();
const rp = require('request-promise');

app.get('/', (req, res) => {
    let buyboxes = null;
    try {
        buyboxes = await rp(`http://${process.env.BUYBOX_SERVICE}`);
    } catch (e) {
        console.log(e);
    }

    res.json({
        id: 123,
        name: "MyRandomSeller",
        description: "SellerInfo",
        buyboxes: buyboxes
    })
});

const server = app.listen(3000, '0.0.0.0', () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
