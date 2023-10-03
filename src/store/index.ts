import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contato'

const store = configureStore({
  reducer: {
    contatos: contatoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
