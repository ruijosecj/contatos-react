import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 150px;
  width: 100%;
  margin-bottom: 16px;
  border-radius: 16px;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
`
export const Texto = styled.span`
  font-size: 18px;
  padding: 16px;
  display: block;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const LinkButton = styled(Link)`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const Campo = styled.input`
  width: 400px;
  height: 40px;
  border: none;
  font-size: 14px;
  display: block;
  margin: 8px;
  padding: 4px;
  background-color: transparent;
`
export const CampoTelefone = styled(Campo)`
  font-size: 24px;
  font-weight: bold;
  color: #8b8b8b;
`
export const CampoNome = styled(Campo)`
  font-size: 24px;
  font-weight: bold;
`
