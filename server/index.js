const express = require('express');
const receiptRouter = require('./routes/receipts');

const app = express();

app.use(express.json());
app.use('/receipts', receiptRouter);

const PORT = 3000
app.listen(PORT, () =>{
    console.log(`running on http://localhost:${PORT}`);
});