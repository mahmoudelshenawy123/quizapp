import logo from './logo.svg';
import { BrowserRouter  ,Route,Routes} from 'react-router-dom';
import './stylesheets/App.css';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import InstabugLogin from './InstabugLogin';

function App() {
  return (
    <div className="App">
      <div className='outer'>
          <BrowserRouter>
            <Routes>
              <Route path="/Home" exact element={<Home/>}></Route>
              <Route path="/Login" element={<Login/>}></Route>
              <Route path="/SignUp" element={<SignUp/>}></Route>
              <Route path="/InstabugLogin" element={<InstabugLogin/>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
