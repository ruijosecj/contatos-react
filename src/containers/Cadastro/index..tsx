import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Botao, Campo, Titulo } from './style'
import { cadastrar } from '../../store/reducers/contato'

const Cadastro = () => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(cadastrar({ nome, email, telefone }))
  }

  return (
    <>
      <Titulo>Cadastro de Contato</Titulo>
      <form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Digite o nome"
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Digite o email"
        />
        <Campo
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          type="number"
          placeholder="Digite o Telefone"
        />
        <Botao>Cadastrar</Botao>
      </form>
    </>
  )
}

export default Cadastro
