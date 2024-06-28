import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import NewPost from './components/NewPost';
import UserInfo from './components/UserInfo';
import AccountPage from './components/AccountPage';

function App() {
  const username = 'Пользователь';
  const avatar = 'https://example.com/avatar.jpg';

  return (
    <Router>
      <div>
        <header>
          <UserInfo username={username} avatar={avatar} />
        </header>
        <Switch>
          <Route exact path="/" component={PostList} />
          <Route path="/account" component={AccountPage} />
          <Route path="/post/:postId" component={PostDetails} />
        </Switch>
        <NewPost />
      </div>
    </Router>
  );
}

export default App;
