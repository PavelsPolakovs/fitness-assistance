import { type UseTranslationResponse } from 'react-i18next'

export * from './form-controls-configuration'
export * from './form-schema/shapes'
export * from './form-schema/types'
export * from './redusers'
export * from './select-options'
export * from './store'

export type Translation = UseTranslationResponse<string, string>

export type TranslationObject = {
  en: string
  es: string
}
