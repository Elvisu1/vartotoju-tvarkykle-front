
import './App.css';
import {Route, Switch} from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import UsersPage from "./pages/users/UsersPage";
import AddUserPage from "./pages/addUser/AddUserPage";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <div className='container'>

          <Switch>
              <Route exact path='/'>
                  <Navbar/>
                  <HomePage/>
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
