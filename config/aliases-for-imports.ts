import path from 'path'

const root = '../src/'

export const AliasesForImports: Record<string, string> = {
  '@Actions': path.resolve(__dirname, `${root}store/slice`),
  '@Api': path.resolve(__dirname, `${root}core/api`),
  '@Components': path.resolve(__dirname, `${root}components`),
  '@Constants': path.resolve(__dirname, `${root}core/constants`),
  '@Enums': path.resolve(__dirname, `${root}core/enums`),
  '@FormControlsConfiguration': path.resolve(__dirname, `${root}core/form-controls-configuration`),
  '@FormSchema': path.resolve(__dirname, `${root}core/form-schema`),
  '@FormValidators': path.resolve(__dirname, `${root}core/form-validators`),
  '@Helpers': path.resolve(__dirname, `${root}core/helpers`),
  '@Hooks': path.resolve(__dirname, `${root}core/hooks`),
  '@Images': path.resolve(__dirname, `${root}assets/img`),
  '@ItnComponents': path.resolve(__dirname, `${root}project-based-components/oaf/itn`),
  '@Models': path.resolve(__dirname, `${root}core/models`),
  '@ProjectBasedComponents': path.resolve(__dirname, `${root}project-based-components`),
  '@Selectors': path.resolve(__dirname, `${root}store/selectors`),
  '@ServerTransformers': path.resolve(__dirname, `${root}transformers/server`),
  '@ServerTypes': path.resolve(__dirname, `${root}core/types/server-responses`),
  '@Services': path.resolve(__dirname, `${root}core/services`),
  '@Store': path.resolve(__dirname, `${root}store/store`),
  '@StoreTransformers': path.resolve(__dirname, `${root}store/store/transformers`),
  '@TextEnums': path.resolve(__dirname, `${root}components/atoms/text/text-enums`),
  '@TypeChecks': path.resolve(__dirname, `${root}core/type-checks`),
  '@TypeGuards': path.resolve(__dirname, `${root}core/type-guards`),
  '@Types': path.resolve(__dirname, `${root}core/types`),
  '@UiTransformers': path.resolve(__dirname, `${root}transformers/ui`),
  '@Utils': path.resolve(__dirname, `${root}core/utils`)
}
