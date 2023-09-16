import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { Product } from '../../../src/types/Product';
import app from '../../../src/app';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('produto criado com sucesso', async () => {
    const product: Product = { name: 'Produto', price: '20', orderId: 1 };
    sinon.stub(ProductModel, 'create').resolves(ProductModel.build({...product, id: 1}));
    const res = await chai.request(app).post('/products').send(product);
    expect(res.body).to.have.property('name', product.name);
    expect(res.body).to.have.property('price', product.price);
    expect(res.body).to.have.property('id', 1);
    expect(res.status).to.equal(201);
  })
});
