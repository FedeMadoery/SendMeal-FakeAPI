// Imports
const jsonServer = require('json-server');
const { v4: uuidv4 } = require('uuid')
const server = jsonServer.create();
const path = require('path');
// Setup JsonServer
const router = jsonServer.router(path.join(__dirname, 'db.json'));
// Setup middlewares
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(async (req, res, next) => {
  switch (req.method) {
    case 'POST':
      req.body = {...req.body, id: uuidv4()}
      await enteringInToTheBlackHole(500);
      break;
    case 'GET':
      break
  }
  next()
});
server.use(router);

// Edit render method to get all the meals that are linked to a delivery order
router.render = function (req, res) {
  const {data} = res.locals;
  if (req.path.includes('/pedidos') && req.method === 'GET') {
    if (isArray(data)) {
      const result = data.map((pedido) => {
        let platos = []
        if(!!pedido.platosId) {
          platos = pedido.platosId.map((platoId) => router.db.get('platos').find({id: platoId}).value())
        }
        return {...pedido, platos}
      })
      res.jsonp(result)
    } else if(!!data.platosId){
      const platos = data.platosId.map((platoId) => router.db.get('platos').find({id: platoId}).value())
      res.jsonp({...data, platos})
    } else {
      res.jsonp(data)
    }
  } else {
    res.jsonp(data)
  }
}
server.listen(3001, () => {
  console.log('Send Meal (JSON Server) esta corriendo en el puerto 3001');
  console.log('Usa localhost:3001/platos para listar todos los platos disponibles');
  console.log('Usa localhost:3001/platos/{id} para traer solamente un plato');

});

function enteringInToTheBlackHole(ms) {
  // Método para simular una demora de una consulta real.
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isArray(a) {
  return (!!a) && (a.constructor === Array);
}