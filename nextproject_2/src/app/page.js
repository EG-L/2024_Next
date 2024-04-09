"use client";
import Image from "next/image";
import { Fragment } from "react";
import { Route,Routes,BrowserRouter as Router } from "react-router-dom";
import Funding from "./Components/Funding/Funding";
export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Funding/>}/>
      </Routes>
    </Router>
  );
}
