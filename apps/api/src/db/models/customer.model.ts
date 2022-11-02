import {
  CreationOptional,
  DataTypes,
  ForeignKey,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelAttributes,
  NOW,
  Sequelize,
} from 'sequelize';
import { User, USER_TABLE } from './user.model';

export const CUSTOMER_TABLE = 'customers';

export const CustomerSchema: ModelAttributes<Customer> = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: NOW,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

export class Customer extends Model<InferAttributes<Customer>, InferCreationAttributes<Customer>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare lastName: string;
  declare phone: CreationOptional<string>;
  declare createdAt: CreationOptional<string>;
  declare userId: ForeignKey<User['id']>;

  static associate(models: Sequelize['models']) {
    this.belongsTo(models.User, { as: 'user' });
    this.hasMany(models.Order, { as: 'orders', foreignKey: 'customerId' });
  }

  static config(sequelize: Sequelize) {
    return { sequelize, tableName: CUSTOMER_TABLE, modelName: Customer.name, timestamps: false };
  }
}
