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
import { Order, ORDER_TABLE } from './order.model';
import { Product, PRODUCT_TABLE } from './product.model';

export const ORDER_ITEM_TABLE = 'order_items';

export const OrderItemSchema: ModelAttributes<OrderItem, InferAttributes<OrderItem>> = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: 'id',
    },
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCT_TABLE,
      key: 'id',
    },
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

export class OrderItem extends Model<
  InferAttributes<OrderItem>,
  InferCreationAttributes<OrderItem>
> {
  declare id: CreationOptional<number>;
  declare orderId: ForeignKey<Order['id']>;
  declare productId: ForeignKey<Product['id']>;
  declare quantity: number;

  static associate(models: Sequelize['models']) {
    this.belongsTo(models.Order, { as: 'order' });
    this.belongsTo(models.Product, { as: 'product' });
  }

  static config(sequelize: Sequelize) {
    return { sequelize, tableName: ORDER_ITEM_TABLE, modelName: OrderItem.name, timestamps: false };
  }
}
