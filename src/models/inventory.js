import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const defineInventory= (sequelize)=> {
  return sequelize.define('inventory', {
    inventory_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    film_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      references: {
        model: 'film',
        key: 'film_id'
      }
    },
    store_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'inventory',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "idx_store_id_film_id",
        fields: [
          { name: "store_id" },
          { name: "film_id" },
        ]
      },
      {
        name: "inventory_pkey",
        unique: true,
        fields: [
          { name: "inventory_id" },
        ]
      },
    ]
  });
};

export default defineInventory