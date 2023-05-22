import routerProduct from "./routes/products.route"
import routerCategory from "./routes/categories.route"
import routerOrder from "./routes/orders.route"
import routerUser from "./routes/users.route"
var bodyparser = require ('body-parser')

import express from "express";

const app = express();  // create a new express app
const port = 3000;  // the server will listen on this port

app.use(express.json());
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {  // start the Express server
  console.log(`server with the port:${port} is active`);  
});

app.use('/products', routerProduct);  // use the router for the products
app.use('/users', routerUser);  // use the router for the users
app.use('/categories', routerCategory);  // use the router for the categories
app.use('/orders', routerOrder);  // use the router for the orders