import React from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';

export const MainRoute = () => {
    let token = localStorage.getItem('token');
  return (
    <Routes>

        <Route path="/" element={<PublicRoute/>}>
            <Route path="/login" element ={<Login/>}/>
        </Route>
        <Route path="/" element={<PrivateRoute/>}>
             {/* <Route path="/dashAdmin" element ={<DashAdmin/>}/>   */}
        </Route>
    </Routes>
  )
}
