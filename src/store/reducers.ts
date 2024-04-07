import { type PayloadAction } from '@reduxjs/toolkit'
import { type StoreState } from '@Types'
import { type AppState } from '@Enums'

const setAppState = (state: StoreState, action: PayloadAction<AppState>): void => {
  state.appState = action.payload
}

const reducers = {
  setAppState
}

export default reducers
