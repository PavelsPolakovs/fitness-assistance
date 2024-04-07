import { LanguageCode } from '@Enums'

// This method make check is the passed value is value of LanguageCode
export const isValidLanguageCode = (languageCode: LanguageCode | undefined): languageCode is LanguageCode => {
  if (languageCode !== undefined) {
    return Object.values(LanguageCode).includes(languageCode)
  }

  return false
}
