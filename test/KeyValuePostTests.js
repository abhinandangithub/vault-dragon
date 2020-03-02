//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
/*
* Test the /POST route
*/
chai.use(chaiHttp);
describe('Books', () => {
        
    describe('/POST new key value data', () => {
        it('it should not POST a value for invalid JSON', (done) => {
        chai.request(server)
        .post('/api/key-values/')
            .send()
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('message').which.is.eq('Update unsuccessful');
              done();
            });
            done();
        });
  });
    describe('/POST new key value data', () => {
        it('it should POST a value for a new key and value', (done) => {
          let keys = {"key6": "value122"}; 
        chai.request(server)
        .post('/api/key-values/')
            .send(keys)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('key').which.is.eq('key6');
              done();
            });
            done();
        });
  });
});