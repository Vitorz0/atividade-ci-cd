
const request = require('supertest');
const app = require('./server');

test('A rota inicial deve funcionar', async () => {
  const resposta = await request(app).get('/');

  expect(resposta.status).toBe(200);
  expect(resposta.text).toBe(
    'Aplicação DevFlow Solutions funcionando!'
  );
});
