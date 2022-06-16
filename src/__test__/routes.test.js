import request from 'supertest'
import mongoose from 'mongoose'
import app from '../app.js'

const id = '62aba412fadb407988a88a9c'


describe('Testing Routes',() => {

	
	it('GET /markers => return array markers', async () => {
		await request(app)
			.get("/markers")
			.expect("Content-Type", /json/)
			.expect(200)
			.then((response) => {
				expect(response.body).toEqual(
					expect.arrayContaining([
						expect.objectContaining({
							lat: expect.any(Number),
							lng: expect.any(Number)
						})
					])
				)
			})
	})

	
	it('GET /markers/id => return specific marker', async () => {
		await request(app)
		.get(`/markers/${id}`)
		.expect("Content-Type", /json/)
		.expect(200)
		.then((response) => {
			expect(response.body).toEqual(
				expect.objectContaining({
					lat: expect.any(Number),
					lng: expect.any(Number)
				})
			)
		})
	})

		
	it('GET /markers/id => return 400 if invalid ID', async () => {
		await request(app)
		.get("/markers/invalidId")
		.expect(400)
	})


	it('POST /markers => create marker if required fields are specified correctly', async () => {
		 await request(app)
		 	.post("/markers")
			.send({
				lat: 123,
				lng: 311
			})
			.expect('Content-Type', /json/)
			.expect(201)
			.then((response) => {
				expect(response.body).toEqual(
					expect.objectContaining({
						__v: expect.anything(),
						_id: expect.anything(),
						createdAt: expect.anything(),
						lat: 123,
						lng: 311,
						updatedAt: expect.anything(),
					})
				)
			})
		
	})

	it('POST /markers => return 500 if any of the required fields are missing', async () => {
		 await request(app)
		 	.post("/markers")
			.send({
				lat: 123,
			})
			.expect('Content-Type', /json/)
			.expect(500)
	})
	
	it('PUT /markers/id => update specified marker', async () => {
		await request(app)
		.put(`/markers/${id}`)
		.send({
			lat: 777,
			lng: 777
		})
		.expect("Content-Type", /json/)
		.expect(200)
		.then((response) => {
			expect(response.body).toEqual(
				expect.objectContaining({
					"message": "Marcador atualizado com sucesso"
				})
			)
		})
	})

	it('PUT /markers/id => return 500 if invalid ID', async () => {
		await request(app)
		.put("/markers/invalidId")
		.send({
			lat: 777,
			lng: 777
		})
		.expect("Content-Type", /json/)
		.expect(500)
	})


	it('DELETE /markers/id => return 500 if invalid ID', async () => {
		await request(app)
			.delete("/markers/invalidId")
			.expect(500)
	})

	// ======= // Se usar esses aqui vai dar ruim // ====== // 

	// it('DELETE /markers/id => remove specified marker', async () => {
	// 	await request(app)
	// 		.delete("/markers/62ab7fede2fc5a1fd2143b6f")
	// 		.expect("Content-Type", /json/)
	// 		.expect(200)
	// 		.then((response) => {
	// 			expect(response.body).toEqual(
	// 				expect.objectContaining({
	// 					"message": `Marcador excluído com sucesso`
	// 				})
	// 			)
	// 		})
	// })

	// it('DELETE /markers/id => remove all markers', async () => {
	// 	await request(app)
	// 		.delete("/markers/")
	// 		.expect("Content-Type", /json/)
	// 		.expect(200)
	// 		.then((response) => {
	// 			expect(response.body).toEqual(
	// 				expect.objectContaining({
	// 					"message": `Todos marcadores excluídos com sucesso`
	// 				})
	// 			)
	// 		})
	// })

		// ==================================================== // 


})


afterAll(done => {
  // Closing the DB connection allows Jest to exit successfully.
  mongoose.connection.close()
  done()
})