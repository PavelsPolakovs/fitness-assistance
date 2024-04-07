import { type ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { type CombinedState, type MiddlewareArray, type ThunkMiddleware } from '@reduxjs/toolkit'
import { type AnyAction } from 'redux'
import { type AppState } from '@Enums'

type AppMiddlewareArray = MiddlewareArray<[
  ThunkMiddleware<CombinedState<StoreState>, AnyAction, undefined>
]>

export type AppToolkitStore = ToolkitStore<StoreState, AnyAction, AppMiddlewareArray>

export type StoreState = {
  appState: AppState
}
