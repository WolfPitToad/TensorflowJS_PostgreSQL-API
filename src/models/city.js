import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const defineCity= (sequelize) =>{
  return sequelize.define('city', {
    city_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    country_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'country',
        key: 'country_id'
      }
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'city',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "city_pkey",
        unique: true,
        fields: [
          { name: "city_id" },
        ]
      },
      {
        name: "idx_fk_country_id",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};

export default defineCity