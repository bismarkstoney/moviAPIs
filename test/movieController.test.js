const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.should();
chai.use(chaiHttp);
describe('Movie APIs', () => {
	describe('Add your favorite   movie Controller', () => {
		it('should add your favorite movie  ', (done) => {
			chai
				.request(app)
				.post('/api/v1/movies')
				.end((err, response) => {
					response.should.have.status(200);
					done();
				});
		});
	});

	describe('Get all Movies Controller', () => {
		it('should get all movies and also filter, search and limit', (done) => {
			chai
				.request(app)
				.get('/api/v1/movies')
				.end((err, response) => {
					response.should.have.status(200);
					done();
				});
		});
	});

	describe('Get  a single movie Controller', () => {
		it('should get only a single movie by passing the movie ID ', (done) => {
			chai
				.request(app)
				.get('/api/v1/movies/6349bfd0a291c9d21ff79b61')
				.end((err, response) => {
					response.should.have.status(200);
					done();
				});
		});
	});

	describe('Update  a single movie Controller', () => {
		it('should update only a single movie by passing the movie ID ', (done) => {
			chai
				.request(app)
				.patch('/api/v1/movies/6349bfd0a291c9d21ff79b61')
				.end((err, response) => {
					response.should.have.status(200);
					done();
				});
		});
	});

	describe('Delete  a single movie Controller', () => {
		it('should delete only a single movie by passing the movie ID ', (done) => {
			chai
				.request(app)
				.delete('/api/v1/movies/6349bfd0a291c9d21ff79b61')
				.end((err, response) => {
					response.should.have.status(200);
					done();
				});
		});
	});
});
