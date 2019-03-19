import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';

// By configuring chai
chai.should();
chai.use(chaiHttp);

// Testing the user signup

describe('POST/auth/signup',() =>{
    it('It should be an object', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .end((err, res) => {
          result.body.should.be.an('object');
          done();
      });
    });

    it('It should have a status', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .end((err, res) => {
          result.body.should.have.property('status');
          done();
        });
    });

    it('should validate user by checking the last name and the email', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({ email: 'viachris.hab', password: '#@12345abcd', firstname: 'Christophe', lastname: 'Habima123' })
        .end((err, res) => {
          result.body.should.have.property('status').with.equal(406);
          result.body.should.have.property('errors').with.lengthOf(3);
          done();
        });
    });

    it('should validate user by checking the first name and password', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({ email: 'viachris.hab@gmail.cm', password: '#@12345abcd', firstname: 'c25', lastname: 'Habimana' })
        .end((err, res) => {
          result.body.should.have.property('status').with.equal(406);
          result.body.should.have.property('errors').with.lengthOf(3);
          done();
        });
    })

    it('should check the existance of the user', (done) => {
      chai.request(app)
        .post('/api/v1/auth/auth')
        .send({ email: 'viachris.hab@gmail.com', password: '#@12345abcd', firstName: 'Christophe', lastName: 'Habimana' })
        .end((err, res) => {
          result.body.should.have.property('status').with.equal(406);
          result.body.should.have.property('errors').with.lengthOf(1);
          done();
        });
    });

    it('should confirm the signup to the right information and provide with them tokens', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({ email: 'viachris.hab@gmail.com', password: '#@12345abcd', firstName: 'Christophe', lastName: 'Habimana' })
        .end((err, res) => {
          result.body.should.have.property('status').with.equal(200);
          result.body.should.have.nested.property('data[0].token').to.be.a('String');
          done();
        });
    });
  });

// Testing the user login

describe('login', () => {
  it('It should be an object', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .end((err, res) => {
        result.body.should.be.an('object');
        done();
      });
  });

  it('It should have status', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .end((err, res) => {
        result.body.should.have.property('status');
        done();
      });
  });

  it('It should not login when password is not valid',(done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'viachris.hab@gmail.com', password: '@12345' })
      .end((err, res) => {
        result.body.should.have.property('status').with.equal(406);
        done();
      });
  });

  it('It should not login when email is not valid',(done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'viachris.hab@gmai.cm', password: '#@12345abcd' })
      .end((err, res) => {
        result.body.should.have.property('status').with.equal(406);
        done();
      });
  });

  it('It should not login when the required text input is empty',(done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({ email: '', password: '' })
      .end((err, res) => {
        result.body.should.have.property('status').with.equal(406);
        done();
      });
  });

  it('should login',(done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'viachris.hab@gmail.com', password: '#@12345abcd' })
      .end((err, res) => {
        result.body.should.have.property('status').with.equal(200);
        done();
      });
  });

  it('should have token',(done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'viachris.hab@gmail.com', password: '#@12345abcd' })
      .end((err, res) => {
        result.body.should.have.property('data').have.property('token');
        done();
      });
  });
});
