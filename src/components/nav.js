// NOT USING

import React from 'react'
import { Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class Nav extends React.Component{
  render(){
    return(
      <div className="header">
        <div className="nav">
          <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
          
        </div>
      </div>
    )
  }
}


export default Nav


// <NavLink activeClassName="active" className="item" to="/questions">Questions</NavLink>