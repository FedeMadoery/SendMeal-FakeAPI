const faker = require('faker');
const fs = require('fs');

exports.creator = async function () {
  const MEAL_COUNT = 30;
  const meals = Array(MEAL_COUNT).fill(0).map((__, i) => {
    const meal = {
      id: faker.random.uuid(),
      titulo: capitalizeFirstLetter(faker.fake("{{random.words(1)}} {{lorem.word}}")),
      descripcion: capitalizeFirstLetter(faker.random.words(5)),
      precio: faker.commerce.price(),
      calorias: faker.random.number({min: 100, max: 2000})
    }
    console.log(meal.titulo)
    return meal;
  });
  const mealsToStore = JSON.stringify({meals, deliveryOrder: []});
  fs.writeFile('db.json', mealsToStore, 'utf8', (err, data) => {
    if (err){
      console.log(err);
    } else {
      console.log(`Se crearon exitosamente ${MEAL_COUNT} platos`);
    }
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}