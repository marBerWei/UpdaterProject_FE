import React from 'react'
import { Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class Nav extends React.Component{
  render(){
    return(
      <div className="header">
        <img className="updater_pic" src={require('./updater_logo.png')}/>
        <div className="nav">
          <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
          <NavLink activeClassName="active" className="item" to="/questions">Questions</NavLink>
        </div>
      </div>
    )
  }
}


export default Nav