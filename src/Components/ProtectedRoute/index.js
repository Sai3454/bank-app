import {Navigate} from 'react-router-dom'
import Cookie from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookie.get('x-hasura-admin-secret')
  if (token === undefined) {
    return <Navigate to="/login" />
  }
  return <props.component />
}

export default ProtectedRoute