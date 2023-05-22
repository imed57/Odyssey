import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import Order from './Orders';

interface IUser {  // interface for User model, it will be usefull for the service and the error handling
  id: number;
  surname: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  adress: string;
  city: string;
}

const User = sequelize.define('user', {  // define the model for the user with the attributes and options
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Order, {  // define the relationship between the user and the order
});
Order.belongsTo(User, {  // we have to define the relationship in both way: user has many order and order belongs to user
});

export default User;
export { IUser };
