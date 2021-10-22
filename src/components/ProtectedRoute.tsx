import { Route, Redirect } from 'react-router-dom'
import { includes } from 'lodash'

const ProtectedRoute = (props: Props) => {
  const { currentRole, path, component, roles } = props
  if (roles.length === 0 || includes(roles, currentRole))
    return <Route path={path} exact component={component} />
  return <Redirect to="/lost" />
}

type Props = {
  currentRole: string
  path: string
  component: JSX.Element | any
  roles: string[]
}

export default ProtectedRoute
