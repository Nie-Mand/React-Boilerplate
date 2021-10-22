import { render } from 'react-dom'
import { StrictMode } from 'react'
import App from './app'
import { Provider } from 'react-redux'
import store from './redux/store'

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('app')
)
