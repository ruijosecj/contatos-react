import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Rui José',
      email: 'ruijosecj@gmail.com',
      telefone: '85985364282'
    },
    {
      id: 2,
      nome: 'Ana Sofia',
      email: 'anasofia@gmail.com',
      telefone: '85996849694'
    },
    {
      id: 3,
      nome: 'Fatima Oliveira',
      email: 'kissfafy@gmail.com',
      telefone: '85982008913'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((contato) => contato.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const nomeExistente = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      const telefoneExistente = state.itens.find(
        (contato) => contato.telefone === action.payload.telefone
      )
      if (nomeExistente) {
        alert('Já existe um contato com esse nome.')
      } else if (telefoneExistente) {
        alert('Já existe um contato com esse telefone.')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions

export default contatoSlice.reducer
