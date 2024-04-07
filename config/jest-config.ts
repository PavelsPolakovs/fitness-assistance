import { AliasesForImports } from './aliases-for-imports'

// Map aliases for Jest
const moduleNameMapper: Record<string, string> = {}
Object.keys(AliasesForImports).forEach((key: string) => {
  moduleNameMapper[ key ] = AliasesForImports[ key ]
})

export const JestConfig = {
  configure: {
    moduleNameMapper,
    setupFilesAfterEnv: ['./config/jest-setup.ts']
  }
}
