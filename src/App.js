import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./user/authContext/AuthContext";

import Nav from "./sidebar/Nav";

import Login from "./user/login/Login";
import Register from "./user/register/Register";
import Header from "./user/header/Header";

import RecyclePage from "./Page/RecyclePage";
import EatingPage from "./Page/EatingPage";
import ElectricPage from "./Page/ElectricPage";
import HomePage from "./Page/HomePage";

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Center>
          <Header/>
          <Nav/>
          <Routes>
            <Route path="/" element={<Login/>}/>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recycle" element={<RecyclePage />} />
            <Route path="/eating" element={<EatingPage />} />
            <Route path="/electric" element={<ElectricPage />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </Center>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
