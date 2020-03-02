//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
describe('Books', () => {
    /*
    * Test the /GET route
    */
   describe('/GET value', () => {
       it('it should not return any value for an invalid key', (done) => {
           chai.request(server)
           .get('/api/key-values/key17')
           .end((err, res) => {
               res.should.have.status(400);
               res.body.should.not.have.property('value');
               done();
            });
            done();
        });
    });
   describe('/GET value', () => {
       it('it should GET most recent value of the key comparing timestamp', (done) => {
           chai.request(server)
           .get('/api/key-values/key1?timestamp=1582911358')
           .end((err, res) => {
               res.should.have.status(200);
               res.body.should.have.property('value');
               done();
            });
            done();
        });
    });
   describe('/GET value', () => {
       it('it should GET most recent value of the key', (done) => {
           chai.request(server)
           .get('/api/key-values/key1')
           .end((err, res) => {
               res.should.have.status(200);
               res.body.should.have.property('value');
               done();
            });
            done();
        });
    });
});
    