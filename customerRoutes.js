const Router = require('express-promise-router');
const controller = require('./controllers/usercontroller');

module.exports = () => {
  const router = Router();

  router.get('/customer/', (req, res) => res.json(controller.readAll()));

  router.post('/customer/add/', (req, res) =>
    res.json(controller.createItem(req.body))
  );
  router.get('/customer/:id', (req, res) => {
    return res.json(controller.readItem(req.params.id));
  });
  router.put('/customer/:id', (req, res) =>
    res.json(controller.updateItem(req.params.id, req.body))
  );
  router.delete('/customer/:id', (req, res) =>
    res.json(controller.deleteItem(req.params.id))
  );

  return router;
};