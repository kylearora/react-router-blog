import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link exact to="/">
              <img src="https://18955-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2017/05/LiveJournal.png" alt=""/>
            </Link>
            <NavLink className="navLink" exact to="/">PollyBlog</NavLink>
            <NavLink className="navLink" to="/createpost">Create a New Post</NavLink>
            <NavLink className="navLink" to="/postlist">Show all Posts</NavLink>
          </nav>
        </header>


        {this.props.children}

      </div>
    )
  }
}

export default BaseLayout
