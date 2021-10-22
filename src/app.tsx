import { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import routes from './app.routes'
import ProtectedRoute from './components/ProtectedRoute'
import Loading from './components/Loading'

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Layout>
          <Switch>
            {routes.map(props => (
              <ProtectedRoute key={props.path} {...props} currentRole="" />
            ))}
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default App
