import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  li{
    list-style: none;
  }

  body{
    display: flex;
    justify-content: center;
  }
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vh;
  align-items: center;
  flex-direction: column;
`

export default EstiloGlobal
