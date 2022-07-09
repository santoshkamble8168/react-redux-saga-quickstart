import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
import ROUTES from '../../utils/routes'

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <div>
        <div>404: Page Not found</div><br/>
        <Link to={ROUTES.HOME}>Back to home page</Link>
      </div>
    </div>
  )
}

export default NotFound