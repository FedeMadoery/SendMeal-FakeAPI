// Imports
const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
// Setup JsonServer
const router = jsonServer.router(path.join(__dirname, 'db.json'));
// Setup middlewares
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(async (req, res, next) => {
  if (req.method === 'POST') {
    await enteringInToTheBlackHole(500);
  }
  next()
});
server.use(router);
server.listen(3001, () => {
  console.log('Send Meal (JSON Server) esta corriendo en el puerto 3001');
  console.log('Usa localhost:3001/meals para listar todos los platos disponibles');
  console.log('Usa localhost:3001/meals/{id} para traer solamente un plato');

});

function enteringInToTheBlackHole(ms) {
  // Método para simular una demora de una consulta real.
  return new Promise(resolve => setTimeout(resolve, ms));
}