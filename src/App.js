import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./sidebar/Nav";
import RecyclePage from "./Page/RecyclePage";
import EatingPage from "./Page/EatingPage";
import ElectricPage from "./Page/ElectricPage";

const Center = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Center>
          <Nav/>
          <Routes>
            <Route path="/recycle" element={<RecyclePage/>} />
            <Route path="/eating" element={<EatingPage/>} />
            <Route path="/electric" element={<ElectricPage/>} />
          </Routes>
        </Center>
      </BrowserRouter>
    );
  }
}

export default App;
