
const {db, Gardener, Vegetable, Plot} = require('./models');
const PlotVegetable = db.model('vegetable_plot')
const newVeggie = Vegetable.create({name: 'Carrot', color: 'orange', planted_on: Date.now()});
const newGardener = Gardener.create({name: 'Billy Bob', age: '55'});

const newPlot = newVeggie.then((veggie) =>{
  newGardener.then((gardener) =>{
    Plot.create({name: 'niceLittlePlot', gardenerId: gardener.id}).then((plot) => {
      return veggie.addPlot(plot);
    });
  });
});
db.sync({forced: true})
  .then(() => {
    console.log('connected!!!');
  })
  .catch((err) => console.log(err))
  .finally(() => db.close());

