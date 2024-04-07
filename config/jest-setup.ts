import '@testing-library/jest-dom'
import 'jest-location-mock'
import '../src/index.scss'

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: {
      language: 'en'
    }
  })
}))

// export const OPEN_SALE_CONFIG = () => {
//   beforeAll(() => {
//     window.location.assign('?id=8d82432a-1e20-4ba6-b2b9-830a66641244')
//   })
// }
//
// export const STORE_WRAP = () => {
//   beforeAll(() => {
//     window.location.assign('?id=8d82432a-1e20-4ba6-b2b9-830a66641244')
//   })
// }
