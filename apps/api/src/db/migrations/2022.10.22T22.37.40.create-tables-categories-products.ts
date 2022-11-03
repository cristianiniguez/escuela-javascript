import { QueryInterface } from 'sequelize';
import { MigrationFn } from 'umzug';
import { CategorySchema, CATEGORY_TABLE } from '../models/category.model';
import { ProductSchema, PRODUCT_TABLE } from '../models/product.model';

export const up: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
};

export const down: MigrationFn<QueryInterface> = async ({ context: queryInterface }) => {
  await queryInterface.dropTable(PRODUCT_TABLE);
  await queryInterface.dropTable(CATEGORY_TABLE);
};
