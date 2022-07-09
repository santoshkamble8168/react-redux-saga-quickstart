import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../utils/routes'
import "./index.scss"

const About = () => {
  return (
    <div>
      <p>About page</p>
      <Link to={ROUTES.HOME}>goto Home page</Link>
    </div>
  )
}

export default About