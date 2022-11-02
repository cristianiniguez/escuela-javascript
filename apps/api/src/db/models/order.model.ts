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
import { Customer, CUSTOMER_TABLE } from './customer.model';

export const ORDER_TABLE = 'orders';

export const OrderSchema: ModelAttributes<Order, InferAttributes<Order>> = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id',
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: NOW,
  },
};

export class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
  declare id: CreationOptional<number>;
  declare customerId: ForeignKey<Customer['id']>;
  declare createdAt: CreationOptional<string>;

  static associate(models: Sequelize['models']) {
    this.belongsTo(models.Customer, { as: 'customer' });
  }

  static config(sequelize: Sequelize) {
    return { sequelize, tableName: ORDER_TABLE, modelName: Order.name, timestamps: false };
  }
}
