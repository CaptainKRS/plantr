const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');


const Gardener = db.define('gardeners', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
   type: Sequelize.INTEGER,
   allowNull: false
  }
})

const Vegetable  = db.define('vegetables', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    allowNull: false
  },
  planted_on: {
    type: Sequelize.DATE
  }

})

const Plot = db.define('plots', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
})

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});
Plot.belongsTo(Gardener);
Gardener.hasOne(Plot);
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});


module.exports = {db, Gardener, Vegetable, Plot};
