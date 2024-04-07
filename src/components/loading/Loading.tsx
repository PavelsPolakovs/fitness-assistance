import React, { type ReactElement } from 'react'
import { chainableClassNames } from '@Helpers'
// import { useTranslation } from 'react-i18next'

import styles from './Loading.module.scss'

export const Loading: React.FC = (): ReactElement => {
  const ccn = chainableClassNames(styles)
  // const { t } = useTranslation('common')

  return (
    <div className={ccn.componentBody()}>
      <div className={ccn.loader()}></div>
      {/* { t('LOADING') } */}
    </div>
  )
}
