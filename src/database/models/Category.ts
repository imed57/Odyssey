import { DataTypes } from 'sequelize';
import sequelize from '../instance';
import Product from './Product';

interface ICategory {
  id: number;
  name: string;
}

const Category = sequelize.define('category', {
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
});

Category.hasMany(Product, {});
Product.belongsTo(Category, {});

export default Category;
export { ICategory };
