import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import bcryptjs from 'bcryptjs';
import UserModel from '../../../src/database/models/user.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  // it('login efetuado com sucesso', async () => {
  //   bcryptjs.compareSync = sinon.stub().returns(true);
  //   UserModel.findOne = sinon.stub().returns({dataValues: {password: 'admin'}});

  //   const resp = await chai.request(app).post('/login').send({ username: 'admin', password: 'admin' })
  //   expect(resp.status).to.be.equal(200);
  // });
});
