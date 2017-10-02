import React, {Component} from 'react'
import Helmet from 'react-helmet'

class CreatePost extends Component {

  constructor(props){
    super(props)
    this.state = {
      authorName: "",
      title: "",
      blogEntry: ""
    }
  }

  handleAuthorNameChange = event => {
    this.setState({
      authorName: event.target.value
    })
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  handleBlogEntryChange = event => {
    this.setState({
      blogEntry: event.target.value
    })
  }

  addToList = event => {
    event.preventDefault();

    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/blogger/", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response, "yay")
      })
      .catch(err => {
        console.log(err, "boo!")
      })
      this.setState({
        authorName: "",
        title: "",
        blogEntry: ""
      })
    }

  render() {
    return (
      <div className="createPostDiv">
        <Helmet>
          <title>Create a Post</title>
        </Helmet>

        <form onSubmit={this.addToList}>

        <label htmlFor="">Author's Name:</label>
        <div>
          <input type="text" name="authorName" value={this.state.authorName} onChange={this.handleAuthorNameChange}/>
        </div>

        <label htmlFor="">Title:</label>
        <div>
          <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
        </div>

        <label htmlFor="">Blog Entry:</label>
        <div>
          <textarea type="text" name="blogEntry" cols="80" rows="10" value={this.state.blogEntry} onChange={this.handleBlogEntryChange}/>
        </div>

        <div className="submitButtonDiv">
          <button className="submitButton" type="submit">Submit</button>
        </div>


        </form>



      </div>
    )
  }
}

export default CreatePost
