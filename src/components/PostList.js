import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Helmet from 'react-helmet'
import ShowPost from './ShowPost'

class PostList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postlist: []
    }
  }

  componentDidMount= () => {
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/")
    .then(r => r.json())
      .then(posts => {
        this.setState({
          postlist: posts
        })
      })
    }



  render() {
    const posts = this.state.postlist.map(post =>{
      return (
        <div className="blogDiv">
          <Helmet>
            <title>Post List</title>
          </Helmet>
          <Link to={`showpost/${post._id}`}>
            <div className="blogItem" key={post._id}>
                <h2 className="blogItemInfo">{post.title}</h2>
                <h4 className="blogItemInfo">by: {post.authorName}</h4>
            </div>
          </Link>
      </div>
      )
    })
    return (
      <div>
        {posts}
      </div>
    )
  }
}

export default PostList
