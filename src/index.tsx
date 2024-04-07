import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { initApi } from '@Services'
import { appStore } from '@Store'
import { APP_DEFAULT_LANGUAGE, MOUNT_ID } from '@Constants'
import { initTranslation } from './i18n'

import { App } from '@Components'

import './index.scss'
import { setAppState } from '@Actions'
import { AppState } from '@Enums'

const initApp = async(): Promise<void> => {
  await initTranslation(APP_DEFAULT_LANGUAGE)
  await initApi()
}

const container: Element | null = document.getElementById(MOUNT_ID)

initApp()
  .then((): void => {
    if (container !== null) {
      createRoot(container).render(
        <React.StrictMode>
          <Provider store={ appStore }>
            <App />
          </Provider>
        </React.StrictMode>
      )

      setTimeout(() => {
        appStore.dispatch(setAppState(AppState.Ready))
      }, 1000)
    }
    else {
      // TODO: Log - element to mount not found
    }
  })
  .catch((): void => {
    // TODO: Do some magic in case if App initialization is not going according to the plan
  })
