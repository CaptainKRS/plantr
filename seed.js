
const {db, Gardener, Vegetable, Plot} = require('./models');

db.sync({force: true})
  .then(() => {
    Vegetable.create({name: 'Carrot', color: 'orange'});
    console.log('connected!!!');
  })
  .catch((err) => console.log(err))
  .finally(() => db.close());

