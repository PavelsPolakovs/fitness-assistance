import { createSlice } from '@reduxjs/toolkit'
import { type StoreState } from '@Types'
import { AppState } from '@Enums'
import reducers from './reducers'

const initialState: StoreState = {
  appState: AppState.Loading
}

const slice = createSlice({
  name: 'root',
  initialState,
  reducers
})

export const {
  setAppState
} = slice.actions
export {} from './extra-reducers'
export default slice.reducer
