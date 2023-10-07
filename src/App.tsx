import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './containers/Cadastro/index.'
import ListaContatos from './containers/ListaContatos/index'
import EstiloGlobal, { Container } from './styles'
import store from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Cadastro />
        <ListaContatos />
      </>
    )
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
