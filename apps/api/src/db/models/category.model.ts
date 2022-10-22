import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelAttributes,
  NOW,
  Sequelize,
} from 'sequelize';

export const CATEGORY_TABLE = 'categories';

export const CategorySchema: ModelAttributes<Category, InferAttributes<Category>> = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: NOW,
  },
};

export class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare image: string;
  declare createdAt: CreationOptional<string>;

  static associate(models: Sequelize['models']) {
    this.hasMany(models.Product, { as: 'products', foreignKey: 'categoryId' });
  }

  static config(sequelize: Sequelize) {
    return { sequelize, tableName: CATEGORY_TABLE, modelName: Category.name, timestamps: false };
  }
}
