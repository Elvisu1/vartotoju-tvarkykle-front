
import './App.css';
import {Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import UsersPage from "./pages/users/UsersPage";
import AddUserPage from "./pages/addUser/AddUserPage";

function App() {
  return (
    <div className="App">
      <div>

          <Switch>
              <Route path='/' exact={'/'}>
                  <Navbar/>
              </Route>
              <Route path='/users'>
                  <UsersPage/>

              </Route>
              <Route path='/users-add'>
                  <AddUserPage/>

              </Route>
          </Switch>
      </div>
    </div>
  );
}

export default App;
