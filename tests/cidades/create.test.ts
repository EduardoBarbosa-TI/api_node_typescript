import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'


describe('Cidades - Create', () =>{
  it('Cria registro', async () => {
    const resTest01 =  await testServer
      .post('/cidades')
      .send({nome: 'Caxias do Sul'})

    expect(resTest01.statusCode).toEqual(StatusCodes.CREATED)
    expect(typeof resTest01.body).toEqual('number')
  })
  it('Tenta criar um registro com o nome curto', async () => {
    const resTest01 =  await testServer
      .post('/cidades')
      .send({nome: 'Ca'})


    expect(resTest01.statusCode).toEqual(StatusCodes.BAD_REQUEST)
    expect(resTest01.body).toHaveProperty('errors.body.nome')
  })
})
