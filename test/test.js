const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../routes/api-routes.js');

describe('API testing route', () => {
    it('Returns a 200 response', (done) => {
        chai.request(app)
            .get('/')
            .end((error, response) => {
                if (error) done(error);
                // Now let's check our response
                expect(response).to.have.status(200);
                done();
            });
    });
});

