import { DataTypes, QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import { CUSTOMER_TABLE } from '../models/customer.model';

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.changeColumn(CUSTOMER_TABLE, 'userId', {
    field: 'user_id',
    type: DataTypes.INTEGER,
    unique: true,
  });
};

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.changeColumn(CUSTOMER_TABLE, 'userId', {
    field: 'user_id',
    type: DataTypes.INTEGER,
    unique: false,
  });
};
