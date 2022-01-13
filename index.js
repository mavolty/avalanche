const port = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.get('/checkout', (req, res) => {
  const options = {
    url: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Basic ' +
        Buffer.from(process.env.MIDTRANS_SERVER_KEY).toString('base64'),
    },
    data: {
      transaction_details: {
        order_id: req.query.order_id,
        gross_amount: req.query.gross_amount,
      },
      item_details: req.query.item_details,
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        email: req.query.email,
        phone: req.query.phone,
        shipping_address: {
          first_name: req.query.first_name,
          last_name: req.query.last_name,
          email: req.query.email,
          phone: req.query.phone,
          address: req.query.address,
          city: req.query.city,
          postal_code: req.query.postal_code,
        },
      },
    },
  };

  axios(options).then(response => {
    res.json(response.data.token);
  });
});

app.get('/confirmation', (req, res) => {
  const order_id = req.query.order_id;

  const options = {
    url: `https://api.sandbox.midtrans.com/v2/${order_id}/status`,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Basic ' +
        Buffer.from(process.env.MIDTRANS_SERVER_KEY + ':').toString('base64'),
    },
  };

  axios(options).then(response => {
    res.json(response.data);
  });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
  }
});

app.listen(port, () => console.log('Server started on port ' + port));
