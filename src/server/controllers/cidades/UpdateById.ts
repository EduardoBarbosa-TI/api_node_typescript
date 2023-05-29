import * as yup from 'yup'

import { validation } from '../../shared/middleware'
import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ICidade } from '../../database/models'

interface iParamsProps{
  id?: number
}

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const updateByIdValidation = validation(getSchema => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3)
  })),
  params: getSchema<iParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0)
  }))
}))

export const updateById =  async (req: Request<iParamsProps,{},IBodyProps>,res: Response) => {
  console.log(req.params)
  console.log(req.body)

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!')
}