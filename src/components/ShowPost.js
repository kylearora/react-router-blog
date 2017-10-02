import React, {Component} from 'react'
import Helmet from 'react-helmet'

class ShowPost extends Component {
  constructor(props) {
      super(props)
      console.log(props)
      this.state = {
        postItem: []
      }
    }

    componentDidMount = () => {
      const {id} = this.props.match.params;
      const URL = `https://tiny-lasagna-server.herokuapp.com/collections/blogger/${id}`;

      fetch(URL)
        .then(r => r.json())
        .then(json => {
          console.log(json)
          this.setState({
            postItem: json
          })
        })
      }

    render() {
      console.log(this.state.postItem)
      return (
        <div className="showPostDiv">
          <div className="postItemSection" >
            <Helmet>
              <title>{this.state.postItem.title}</title>
            </Helmet>
              <div className="postItemDetailDiv">
                  <div className="detailDiv">
                    <div className="postItemDetailTitle">{this.state.postItem.title}</div>
                    <div className="postItemDetailEntry">{this.state.postItem.blogEntry}</div>
                    <div className="postItemDetailName">by: {this.state.postItem.authorName} </div>
                  </div>
              </div>
          </div>
        </div>
      )
    }
  }

export default ShowPost
