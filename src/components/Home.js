import React, {Component} from 'react'
import Helmet from 'react-helmet'

class Home extends Component {
  render() {
    return (
      <div className="homeDiv">
        <Helmet>
          <title>Home</title>
        </Helmet>
      </div>
    )
  }
}

export default Home
