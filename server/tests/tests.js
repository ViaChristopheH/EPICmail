import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server
import app from '../../index';

 chai.should();
 chai.use(chaiHttp);

 describe('get all messages records', () => {

		chai.request(app)
		.post('/api/v1/messages')
		.end((err, res)=>{
			
		})
	
	})

	it('/GET /messages', (done) =>{
	 chai.request(app)
		 .get('/api/v1/messages')
		 .end((err, res)=>{
			res.body.should.be.a('object');
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

    describe('fetch a specific email record', ()=>{
        it('/GET /messages/<message-id>', (done)=>{
     
                 chai.request(app)
                    .get('/api/v1/messages/6')
                    .end((err, res)=>{
                     res.body.should.be.a('object');
                     res.body.should.have.property('status').eql(201);
                     res.body.should.have.property('data');
                     res.body.data.should.be.a('array');
                     res.body.data[0].should.have.property('id').eql(6);
                     res.body.data[0].should.have.property('createdOn').eql('Nov 7, 2018');
                     res.body.data[0].should.have.property('subject').eql('Completion of the work');
                     res.body.data[0].should.have.property('message').eql('I would like to kindly let you know that the requested work is now completed. Thank you!');
                     res.body.data[0].should.have.property('status');
                     done();
                    })
     
        });
     
     });
	 
	 