import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import Users from "./service/servis.users/Servis.Users";
import Posts from "./service/servis.posts/Servis.Posts";
import Comments from "./service/servis.comments/Servis.Comments";


function App() {
  return (
      <Router>
          <div>
            <Link to={'/users'}>user-page</Link>
              <br/>
            <Link to={'/posts'}>posts-page</Link>
              <br/>
            <Link to={'/comments'}>comments-page</Link>
              <br/>
              <Route path={'/users'} component={Users}/>
              <Route path={'/posts'} component={Posts}/>
              <Route path={'/comments'} component={Comments}/>
           </div>
      </Router>
  );
}

export default App;
