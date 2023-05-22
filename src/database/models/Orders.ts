import { DataTypes } from 'sequelize';
import sequelize from '../instance';

interface IOrder {
  id: number;
  name: string;
  size: number;
  price: number;
}

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Order;
export { IOrder };
