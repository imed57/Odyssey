import sequelize from '../instance';
import Product from './Product';
import Order from './Orders';

const ordersProducts = sequelize.define('orders_products', {

});

Product.belongsToMany(Order, {
  through: ordersProducts,
});

Order.belongsToMany(Product, {
  through: ordersProducts,
});

export default ordersProducts;
