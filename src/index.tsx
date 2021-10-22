import { render } from 'react-dom'
import { StrictMode } from 'react'
import App from './app'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('app')
)
