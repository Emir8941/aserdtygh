import { Provider } from "react-redux";
import { createStore } from "redux";
import Users from './pages/Users';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import useReducer from './store/reducer/user';


function App() {
  const store = createStore(useReducer)
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/Users' element={<Users/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
