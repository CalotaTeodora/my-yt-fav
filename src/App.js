import "./App.css";
import NavBar from "./components/NavBar";
import { Routes ,Route } from 'react-router-dom';
import Home from "./components/Home";
import ListOfYoutubers from "./components/ListOfYoutubers";
import Find_me from './components/Find_me';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/content' element={<ListOfYoutubers/>}/>
         <Route path='/findme' element={< Find_me />}/>
      </Routes>
     
    </div>
  );
}

export default App;
