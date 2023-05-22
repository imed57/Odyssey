import seq from './instance';
import User from './models/Users';
import Product from './models/Product';
import Category from './models/Category';
import Order from './models/Orders';
import ordersProducts from './models/Orders_Products';

async function connect() {  // connect to the database
  try {
    await seq.authenticate();  // authenticate to the database named seq
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
async function migrate() {  // migrate the database and create the tables
  try {
    await seq.query('SET FOREIGN_KEY_CHECKS = 0', null, { raw: true }); // set the foreign key checks to 0

    await Category.sync({ force: true });
    console.log('table Product created');

    await Product.sync({ force: true });
    console.log('table Category created');

    await Order.sync({ force: true });
    console.log('table Order created');

    await ordersProducts.sync({ force: true });
    console.log('table ordersProducts created');

    await User.sync({ force: true });
    console.log('table User created');

    seq.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true }); // set the foreign key checks to 1
  } catch (error) {
    console.error('Unable to connect to the table:', error);
  }
}

connect();
migrate();
