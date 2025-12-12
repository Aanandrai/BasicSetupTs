import { QueryInterface,Sequelize , DataTypes } from 'sequelize';

export const up = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
  await queryInterface.addColumn('Users', 'phoneNumber', {
    type: DataTypes.STRING,  // Use Sequelize.STRING for the column type
    allowNull: true,  // Adjust based on whether the phone number is required or optional
  });
};

export const down = async (queryInterface: QueryInterface, Sequelize: Sequelize) => {
  await queryInterface.removeColumn('Users', 'phoneNumber');
};