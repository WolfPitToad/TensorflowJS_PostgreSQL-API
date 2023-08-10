import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const defineFilm_category = (sequelize)=> {
  return sequelize.define('film_category', {
    film_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'film',
        key: 'film_id'
      }
    },
    category_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'category',
        key: 'category_id'
      }
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'film_category',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "film_category_pkey",
        unique: true,
        fields: [
          { name: "film_id" },
          { name: "category_id" },
        ]
      },
    ]
  });
};

export default defineFilm_category