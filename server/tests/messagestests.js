// By importing the independencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';


// By configuring chai
 chai.should();
 chai.use(chaiHttp);

 // The test to get all messages records

 describe('get all messages records', () => {
		
	it('/GET /messages', (done) =>{
	 chai.request(app)
		 .get('/api/v1/messages')
		 .end((err, res)=>{
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property('data');
			res.body.data.should.be.an('array');
			res.body.data[0].should.have.property('id');
			res.body.data[0].should.have.property('createdOn');
			res.body.data[0].should.have.property('subject');
			res.body.data[0].should.have.property('message');
			res.body.data[0].should.have.property('parentMessageId');
			res.body.data[0].should.have.property('status');
			done();
		 })
 
	});

// The test to fetch a specific email record

    describe('fetch a specific email record', ()=>{
        it('/GET /messages/<message-id>', (done)=>{
     
                 chai.request(app)
                    .get('/api/v1/messages/6')
                    .end((err, res)=>{
							res.status.should.be.equal(200);
                     res.body.should.be.an('object');
                     res.body.should.have.property('status').eql(200);
                     res.body.should.have.property('data');
                     res.body.data.should.be.an('array');
                     done();
                    })
     
		  });
		  
		//   When the fetched email is not found
		  it('should not fetch a specific email', (done) => {
			chai.request(app)
			  .get('/api/v1/messages/113434')
			  .end((err, res) => {
				 res.status.should.be.equal(404);
				 res.body.should.be.an('object');
				 res.body.should.have.property('status').eql(404);
				 done();
			  });
		 });
	  });
     
	 // The test to create an email

	 describe('Create an email', ()=>{
		it('/POST /messages', (done)=>{
			const mailEntry = {
			   subject: "Request for approval",
			   message: "I would like to kindly check out the authenticity of the herewith attached documents and then aprove it for a final signature"
			}
			chai.request(app)
				.post('/api/v1/messages')
				.send(mailEntry)
				.end((err, res)=>{
					res.status.should.be.equal(201);
				   res.body.should.be.an('object');
				   res.body.should.have.property('status').eql(201);
				   res.body.should.have.property('data');
				   res.body.data.should.be.an('array');
				   done();
				})
		})
   
		it('it should not create an email --when subject is not included ', (done)=>{
			const mailEntry = {
			   subject: "",
			   message: "I would like to kindly check out the authenticity of the herewith attached documents and then aprove it for a final signature"
			}
			chai.request(app)
				.post('/api/v1/messages')
				.send(mailEntry)
				.end((err, res)=>{
					res.status.should.be.eql(400)
				   res.body.should.be.an('object');
				   res.body.should.have.property('status').eql(400);
				   done();
				})
		});
   
		it('it should not create an email --when subject is a not a string or subject is not at minimum 3 characters', (done)=>{
			const mailEntry = {
			   subject: 1,
			   message: "I would like to kindly check out the authenticity of the herewith attached documents and then aprove it for a final signature"
		}
   
			chai.request(app)
				.post('/api/v1/messages')
				.send(mailEntry)
				.end((err, res)=>{
					res.body.should.be.a('object');
				   res.body.should.have.property('status').eql(400);
				   done();
				})
		});
       
		it('it should not create a message --when message is not defined', (done)=>{
			const mailEntry = {
				subject: "Request for approval",
				message: ""
			}
   
			chai.request(app)
				.post('/api/v1/messages')
				.send(mailEntry)
				.end((err, res)=>{
					res.status.should.be.eql(400)
					res.body.should.be.a('object');
				   res.body.should.have.property('status').eql(400);
				   done();
				})
		});
   
   
		it('it should not create a message --when message is not a string or at minimum 3 characters', (done)=>{
			const mailEntry = {
				subject: "Request for approval",
				message: "I"
			}
   
			chai.request(app)
				.post('/api/v1/messages')
				.send(mailEntry)
				.end((err, res)=>{
					res.body.should.be.a('object');
				   res.body.should.have.property('status').eql(400);
				   done();
				})
		});
	})

	// Testing the received unread messages

	describe('/get all received unread messages', () => {
		it('should fetch all received unread messages', (done) => {
		  chai.request(app)
			 .get('/api/v1/messages/unread')
			 .end((err, res) => {
				res.body.should.be.an('object');
				res.body.should.have.property('status').eql(200);
				done();
			 });
		});
	 });

	// The test to delete an email
	describe('/delete an email', () => {
		it('should delete a specific email', (done) => {
		  chai.request(app)
			 .delete('/api/v1/messages/6')
			 .end((err, res) => {
				res.status.should.be.eql(200);
				res.body.should.be.an('object');
				res.body.should.have.property('data');
				res.body.should.have.property('status').eql(200);
				done();
			 });
		});
	 
		it('should not delete a message', (done) => {
		  chai.request(app)
			 .delete('/api/v1/messages/966789')
			 .end((err, res) => {
				res.status.should.be.eql(404);
				res.body.should.be.an('object');
				res.body.should.have.property('status').eql(404);
				done();
			 });
		});
	 });
	});