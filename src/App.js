import './App.css';
import Body from './components/Body';
import Login from './components/Login';
import Adddata from './components/Adddata';
import { MainRoute } from './components/MainRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";
import { store , persistor } from './redux/store';
import { Provider } from "react-redux";
// import CakeContainer from './components/CakeContainer';
// import Axiostrial from './components/Axiostrial';
// import Header from './components/Header';

const token = localStorage.getItem('token');
function App() {
  
  // if(token){
  //   return (
  //     <Body/>
  //   );
  // }
  // else{
  //   return(
  //     <Login />
  //   )
  // }

  return(
    <>
    {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MainRoute/>
          </BrowserRouter>
        </PersistGate>
      </Provider> */}

      <Body/>
   </>
  );
}

export default App;
