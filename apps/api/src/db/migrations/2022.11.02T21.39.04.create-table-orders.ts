import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import { OrderSchema, ORDER_TABLE } from '../models/order.model';

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.createTable(ORDER_TABLE, OrderSchema);
};

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.dropTable(ORDER_TABLE);
};
