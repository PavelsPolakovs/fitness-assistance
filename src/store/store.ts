import { configureStore, type PreloadedState } from '@reduxjs/toolkit'
import { type AppToolkitStore, type StoreState } from '@Types'

import appSlice from './slice'

export const setupStore = (preloadedState?: PreloadedState<StoreState>): AppToolkitStore => {
  return configureStore({
    reducer: appSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production'
  })
}

export const appStore: AppToolkitStore = setupStore()

// export type RootState = ReturnType<typeof appSlice>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
