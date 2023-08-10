import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const defineLanguage = (sequelize)=> {
  return sequelize.define('language', {
    language_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'language',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "language_pkey",
        unique: true,
        fields: [
          { name: "language_id" },
        ]
      },
    ]
  });
};

export default defineLanguage