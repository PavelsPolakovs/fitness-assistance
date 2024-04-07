import React, { type ReactElement } from 'react'
import { AppState } from '@Enums'
import { Error, Loading } from '@Components'
import { chainableClassNames } from '@Helpers'
import { selectAppState } from '@Selectors'
import { useAppSelector } from '@Hooks'

import styles from './App.module.scss'

export const App: React.FC = (): ReactElement => {
  const ccn = chainableClassNames(styles)
  const appState: AppState = useAppSelector(selectAppState)

  let content: ReactElement
  switch (appState) {
    case AppState.Loading:
      content = <Loading />
      break

    case AppState.Ready:
      content = <div>Test content</div>
      break

    default:
      content = <Error />
  }

  return (
    <div id="root-container" className={ccn.componentBody()}>
      {content}
    </div>
  )
}
