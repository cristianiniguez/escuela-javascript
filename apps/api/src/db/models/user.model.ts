import {
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
  ModelAttributes,
  NOW,
  Sequelize,
} from 'sequelize';

export const USER_TABLE = 'users';

export const UserSchema: ModelAttributes<User> = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: NOW,
  },
};

export enum ROLE {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
}

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
  declare role: CreationOptional<ROLE>;
  declare createdAt: CreationOptional<string>;

  static associate(models: Sequelize['models']) {
    User.hasOne(models.Customer, { as: 'customer', foreignKey: 'userId' });
  }

  static config(sequelize: Sequelize) {
    return { sequelize, tableName: USER_TABLE, modelName: User.name, timestamps: false };
  }
}
