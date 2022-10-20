import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import { CustomerSchema, CUSTOMER_TABLE } from '../models/customer.model';

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
};

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.dropTable(CUSTOMER_TABLE);
};
