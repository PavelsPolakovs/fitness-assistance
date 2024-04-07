import React, { type ReactElement } from 'react'
import { chainableClassNames } from '@Helpers'

import styles from './Error.module.scss'

export const Error: React.FC = (): ReactElement => {
  const ccn = chainableClassNames(styles)

  return (
    <div className={ccn.componentBody()}>
      Some things go wrong
    </div>
  )
}
