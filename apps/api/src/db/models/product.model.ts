import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelAttributes,
  Sequelize,
} from 'sequelize';
import { Category, CATEGORY_TABLE } from './category.model';

export const PROUCT_TABLE = 'products';

export const ProductSchema: ModelAttributes<Product, InferAttributes<Product>> = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
};

export class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare description: string;
  declare image: string;
  declare price: number;
  declare categoryId: ForeignKey<Category['id']>;

  static associate(models: Sequelize['models']) {
    this.belongsTo(models.Category, { as: 'category' });
  }

  static config(sequelize: Sequelize) {
    return { sequelize, tableName: PROUCT_TABLE, modelName: Product.name, timestamps: false };
  }
}
