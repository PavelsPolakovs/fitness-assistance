import process from 'process'
import { type EnvVariable } from '@Enums'
import { isObject } from '@TypeGuards'

export const processEnvVariable = (name: EnvVariable): string | undefined => {
  if (isObject(process) && isObject(process.env)) {
    return process.env[ name ]
  }

  return undefined
}
