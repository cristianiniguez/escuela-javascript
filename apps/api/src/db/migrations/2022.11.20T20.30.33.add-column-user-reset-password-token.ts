import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import { UserSchema, USER_TABLE } from '../models/user.model';

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.addColumn(USER_TABLE, 'reset_password_token', UserSchema.resetPasswordToken);
};

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.removeColumn(USER_TABLE, 'reset_password_token');
};
