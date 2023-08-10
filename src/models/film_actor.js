import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const defineFilm_actor = (sequelize)=> {
  return sequelize.define('film_actor', {
    actor_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'actor',
        key: 'actor_id'
      }
    },
    film_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'film',
        key: 'film_id'
      }
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    }
  }, {
    sequelize,
    tableName: 'film_actor',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "film_actor_pkey",
        unique: true,
        fields: [
          { name: "actor_id" },
          { name: "film_id" },
        ]
      },
      {
        name: "idx_fk_film_id",
        fields: [
          { name: "film_id" },
        ]
      },
    ]
  });
};

export default defineFilm_actor