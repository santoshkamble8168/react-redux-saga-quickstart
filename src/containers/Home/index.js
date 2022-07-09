import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import ROUTES from '../../utils/routes';
import { useDispatch, useSelector } from "react-redux/es/exports";
import { increaseCounter, decreaseCounter, getUsersList } from '../../redux/actions/counterAction';
import "./index.scss"

const Home = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.count)
  const userList = useSelector(state => state.counter.users)

  const increase = () => {
    dispatch(increaseCounter())
  }

  const decrease = () => {
    dispatch(decreaseCounter())
  }

  useEffect(() => {
    if (!userList.length) {
      dispatch(getUsersList())
    }
  }, [])

  return (
    <div>
      <p>Home page</p>
      <Link to={ROUTES.ABOUT}>goto About page</Link>
      <div>Count: {counter}</div>
      <button className='btn primary' onClick={increase}>Increase Count</button>
      <button className='btn secondry' onClick={decrease}>Decrease Count</button>
      <h2>Sample table data using redux, redux-saga & axios</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
        {userList.length > 0 && userList.map((user, index) => {
          return (
            <tr key={user.id} index={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Home