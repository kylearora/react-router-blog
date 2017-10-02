import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './components/App';
import Home from './components/Home';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import ShowPost from './components/ShowPost';


ReactDOM.render(

<Router>

  <App>
    <BaseLayout>

      <Route exact path="/" component={Home}></Route>
      <Route path="/createpost" component={CreatePost}></Route>
      <Route path="/postlist" component={PostList}></Route>
      <Route path="/showpost/:id" component={ShowPost}></Route>

    </BaseLayout>
  </App>


</Router>




, document.getElementById('root'));
registerServiceWorker();
