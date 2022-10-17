import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import { UserSchema, USER_TABLE } from '../models/user.model';

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.createTable(USER_TABLE, UserSchema);
};

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.dropTable(USER_TABLE);
};
