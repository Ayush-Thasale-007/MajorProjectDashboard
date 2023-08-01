import './App.css';
import Body from './components/Body';
import Login from './components/Login';
import Adddata from './components/Adddata';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import CakeContainer from './components/CakeContainer';
// import Axiostrial from './components/Axiostrial';
// import Header from './components/Header';

const token = localStorage.getItem('token');
function App() {

  
  if(token){
    return (
      <Body/>
    );
  }
  else{
    return(
      <Login />
    )
  }

  // return <CakeContainer/>

  // <Adddata/>

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<Login />}></Route>
  //     </Routes>
  //   </BrowserRouter>
  // )
}

export default App;
