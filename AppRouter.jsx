import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { isUserAuthenticated } from "./login/helpers/usersHelper";
import { Login } from "./login/components/Login";
import NavbarUser from "./NavbarUser";
import { NavBarDefect } from "./NavBarDefect";
import { Funciones } from "./Funciones";
import { Profile } from "./user/components/Profilie";
import { Movies } from "./Movie";
import { FunctsUser } from "./user/components/FunctsUser";
import { CreateFunct } from "./user/components/AddFunct";
import { CreateUser } from "./login/components/CreateUser";


export const AppRouter = () => {

  return (

    <BrowserRouter>
      
      <Routes>
     
        <Route path="/profile" element={<Profile />} />

        {/* HOME PAGE --- PRINCIPAL */}
        <Route
          path="/home"
          element={
            !isUserAuthenticated() ? (
              <>
               <NavBarDefect />
                <Funciones/>
              </>
            ) : (
              <>
              <NavbarUser/>
              <Funciones/>
              </>
              
            )
          }
          index
        />
         <Route
          path="/movies"
          element={
            !isUserAuthenticated() ? (
              <>
               <NavBarDefect />
                <Movies/>
              </>
            ) : (
              <>
              <NavbarUser/>
              <Movies/>
              </>
            )
          }
        />

          <Route
          path="/functionsUser"
          element={
            !isUserAuthenticated() ? (
              <Login />
            ) : (
              <FunctsUser/>
            )
          }
        />

<Route
          path="/addFunct"
          element={
            !isUserAuthenticated() ? (
              <Login />
            ) : (
              <CreateFunct/>
            )
          }
        />

        <Route
          path="/Login"
          element={
              <Login />   
          }
        />

        <Route
          path="/createUser"
          element={
                <CreateUser />
          }
        />

      </Routes>
    </BrowserRouter>
  );
};
