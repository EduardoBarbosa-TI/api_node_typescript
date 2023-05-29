import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Cidades - GetAll', () => {
  it('Buscar todos os registros', async () => {
    const resTest01 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias do sul' })

    expect(resTest01.statusCode).toEqual(StatusCodes.CREATED)

    const resBuscada = await testServer
      .get('/cidades')
      .send()

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0)
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK)
    expect(resBuscada.body.length).toBeGreaterThan(0)
  })
})