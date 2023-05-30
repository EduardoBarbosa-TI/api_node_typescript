import * as create  from './Create'
import * as count  from './Count'
import * as getAll  from './GetAll'
import * as getById  from './GetById'
import * as deleteById  from './DeleteById'
import * as updateById  from './UpdateById'

export const CidadesProvider = {
  ...create,
  ...count,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
}