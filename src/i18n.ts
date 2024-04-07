import { EnvVariable, type LanguageCode } from '@Enums'
import { init, use, type TFunction } from 'i18next'
import { initReactI18next } from 'react-i18next'
import I18NextHttpBackend, { type HttpBackendOptions } from 'i18next-http-backend'
import { processEnvVariable } from '@Helpers'
import { isString } from '@TypeGuards'

export const initTranslation = async(langCode: LanguageCode): Promise<TFunction> => {
  use(initReactI18next)
  use(I18NextHttpBackend)

  return await init<HttpBackendOptions>({
    load: 'languageOnly',
    lng: langCode,
    fallbackLng: langCode,
    ns: 'common',
    fallbackNS: 'common',
    returnObjects: true,
    backend: {
      loadPath: (): string => {
        const baseUrl: string | undefined = processEnvVariable(EnvVariable.BaseUrl)

        if (isString(baseUrl)) {
          return `${baseUrl}locale/{{lng}}/{{ns}}.json`
        }

        return 'base-url-not-found-in-env-variables'
      }
    }
  })
}
