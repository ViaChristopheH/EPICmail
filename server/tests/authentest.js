// import chai from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../../index';

// // By configuring chai
// chai.should();
// chai.use(chaiHttp);

// // Testing the case in which the user is unauthorized or/and unnacceptable

// describe('Authentication verification', () => {
//     it('should not authentincate if the token is not provided', (done) => {
//       chai.request(app)
//         .post('/api/v1/messages/')
//         .end((err, res) => {
//           result.body.should.have.property('status').with.equal(401);
//           result.body.should.have.property('errors').with.lengthOf(2);
//           done();
//         });
//     });

//     it('should not authentincate if the provided token is invalid', (done) => {
//       chai.request(app)
//         .post('/api/v1/messages/')
//         .set('token','token-is-invalid')
//         .end((err, res) => {
//           result.body.should.have.property('status').with.equal(406);
//           result.body.should.have.property('errors').with.lengthOf(2);
//           done();
//         });
//     });

//   });