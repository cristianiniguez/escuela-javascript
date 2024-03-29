import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import _ from 'lodash';
import { UserSchema, USER_TABLE } from '../models/user.model';

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.createTable(
    USER_TABLE,
    _.pick(UserSchema, ['id', 'email', 'password', 'createdAt']),
  );
};

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.dropTable(USER_TABLE);
};
