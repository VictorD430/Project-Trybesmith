import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it ('listagem de todos os produtos com sucesso', async () => {
    sinon.stub(ProductModel, 'findAll').resolves([
      ProductModel.build({
        id: 1,
        name: "Estátua Gato de ouro",
        price: "100 gold",
        orderId: 1
      }),
      ProductModel.build({
        id: 2,
        name: "Estátua Gato de prata",
        price: "40 gold",
        orderId: 2
      })
    ]);
    const res = await chai.request(app).get('/products').send();
    expect(res.status).to.equal(200);
    expect(res.body).to.be.deep.equal([
      {
        id: 1,
        name: "Estátua Gato de ouro",
        price: "100 gold",
        orderId: 1
      },
      {
        id: 2,
        name: "Estátua Gato de prata",
        price: "40 gold",
        orderId: 2
      }
    ])
  })
});
