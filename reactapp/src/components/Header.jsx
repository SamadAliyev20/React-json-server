import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <header>
    <div className="container">
        <div className="row">
            <div className="col-lg-2 col-3 left">
            <Link to="/">Users.az</Link>
            </div>
            <div className="col-lg-10 col-12 text-end right align-items-center">
            <Link to="/">Home</Link>
            <Link to="/add">Add User</Link>
            </div>
        </div>
    </div>
   </header>
  )
}

export default Header