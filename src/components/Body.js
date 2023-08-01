import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './Dashboard';
import DepartmentManagement from './DepartmentManagement';
import ManageBot from './ManageBot';
import Help from './Help';
import Query from './Query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from './Login';
import Adddata from './Adddata';
import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import {store,persistor} from '../redux/store';

function Body() {
  const token = localStorage.getItem('');
 
  return (
    <>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Header />
        <div className='mainbody'>
          <Sidebar />
          {/* <div className='displaybox'> */}
            <Routes>
                <Route path="/">
                  <Route  index element={<Dashboard />} />
                  <Route  path="/management" element={<DepartmentManagement />} />
                  <Route  path="/managebot" element={<ManageBot />} />
                  <Route  path="/help" element={<Help />} />
                  <Route  path="/query" element={<Query />} />
                  <Route  path="/adddata" element={<Adddata/>}/>
                </Route>
            </Routes>
          </div>
        {/* </div > */}
      </BrowserRouter>
      </PersistGate>
      </Provider>
    </>
  )
}

export default Body