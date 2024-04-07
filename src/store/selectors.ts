import { type StoreState } from '@Types'
import { type AppState } from '@Enums'

export const selectAppState = (state: StoreState): AppState => state.appState
