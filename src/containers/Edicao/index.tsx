import { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Botao, Campo, Titulo } from './style'
import { editar } from '../../store/reducers/contato'
import { useParams, useNavigate } from 'react-router-dom'
import { RootReducer } from '../../store'

const Edicao = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const contatoEditar = itens.find(
    (contato) => contato.id === (id ? parseInt(id) : null)
  )

  const [nome, setNome] = useState(contatoEditar?.nome)
  const [email, setEmail] = useState(contatoEditar?.email)
  const [telefone, setTelefone] = useState(contatoEditar?.telefone)
  const editarContato = (evento: FormEvent) => {
    evento.preventDefault()
    useDispatch(editar(contatoEditar))
    navigate('/')
  }

  return (
    <>
      <Titulo>Editando Contato</Titulo>
      <form onSubmit={editarContato}>
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
        <Botao>Editar</Botao>
      </form>
    </>
  )
}

export default Edicao
