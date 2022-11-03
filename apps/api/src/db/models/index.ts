import { Sequelize } from 'sequelize';
import { Category, CategorySchema } from './category.model';
import { Customer, CustomerSchema } from './customer.model';
import { OrderItem, OrderItemSchema } from './order-item.model';
import { Order, OrderSchema } from './order.model';
import { Product, ProductSchema } from './product.model';
import { User, UserSchema } from './user.model';

function setupModels(sequelize: Sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderItem.init(OrderItemSchema, Order.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
  OrderItem.associate(sequelize.models);
}

export default setupModels;
