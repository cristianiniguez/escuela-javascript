import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import { OrderItemSchema, ORDER_ITEM_TABLE } from '../models/order-item.model';

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.createTable(ORDER_ITEM_TABLE, OrderItemSchema);
};

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.dropTable(ORDER_ITEM_TABLE);
};
