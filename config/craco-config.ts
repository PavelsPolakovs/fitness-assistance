import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'
import { AliasesForImports } from './aliases-for-imports'
import { JestConfig } from './jest-config'

// https://github.com/ponjs/craco-plugin-env
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CracoEnvPlugin = require('craco-plugin-env')

const config = {
  plugins: [
    {
      plugin: CracoEnvPlugin,
      options: {
        variables: {},
        envDir: path.resolve(__dirname, 'env')
      }
    }
  ],
  webpack: {
    alias: AliasesForImports,
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'src/assets/locale', to: 'locale' }
        ]
      })
    ]
  },
  jest: JestConfig
}

export default config
