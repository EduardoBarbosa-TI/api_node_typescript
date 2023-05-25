import { Request, Response } from 'express'
import * as yup from 'yup'

interface ICidade {
  nome: string
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
})


export const create = async (req: Request<{},{},ICidade>,res: Response ) => {
  let validatedDate: ICidade | undefined = undefined
  try{
    validatedDate = await bodyValidation.validate(req.body)
  } catch(error) {
    const yupError = error as yup.ValidationError

    return res.json({
      errors: {
        default: yupError.message
      }
    })
  }
  console.log(validatedDate)

  return res.send('Create!')
}