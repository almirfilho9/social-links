import Ajv from 'ajv'
import { profileSchema } from './profileSchema'

const ajv = new Ajv({ allErrors: true, strict: false })

export function validateProfile(data) {
  const validate = ajv.compile(profileSchema)
  const valid = validate(data)

  if (!valid) {
    console.error('Profile validation errors:', validate.errors)
    return { valid: false, errors: validate.errors }
  }

  return { valid: true, errors: [] }
}
