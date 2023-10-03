import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { remover } from '../../store/reducers/contato'
import * as S from './style'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome: nomeOriginal,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)

  return (
    <S.Card>
      <S.Texto>{nomeOriginal}</S.Texto>
      <S.Texto>{emailOriginal}</S.Texto>
      <S.Texto>{telefoneOriginal}</S.Texto>
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarRemover onClick={() => setEditando(false)}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.LinkButton to={'/editar/' + id}>Editar</S.LinkButton>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
