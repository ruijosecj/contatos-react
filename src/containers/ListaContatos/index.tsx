import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../Contato'
import { Titulo, Container } from './style'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <>
      <Titulo>Lista de Contatos</Titulo>
      <Container>
        <ul>
          {itens.map((c, index) => (
            <li key={index}>
              <Contato
                nome={c.nome}
                email={c.email}
                telefone={c.telefone}
                id={c.id}
              />
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export default ListaContatos
