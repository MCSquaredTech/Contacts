import React, { useState } from "react";
import * as faCons from "react-icons/fa";

import { Routes, Route } from 'react-router-dom';

import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import NewContact from "./pages/NewContact";
import PersonCard from "./pages/PersonCard";
import PersonDetail from "./pages/PersonDetail";
import Layout from "./pages/Layout";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Contacts />} />
          <Route path="/contacts" element={<NewContact />} />
          <Route path="/people" element={<PersonCard />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
