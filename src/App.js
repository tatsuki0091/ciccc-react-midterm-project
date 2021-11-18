import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./components/top/Top";
import Search from "./components/search/Search";

export const DataContext = createContext();

function App() {
  const [cityName, setCityName] = useState("Vancouver");
  const value = {
    cityName,
    setCityName,
  };
  return (
    <>
      <DataContext.Provider value={value}>
        <Header text={"Wheather News"} />
        <Router>
          <Search />
          <Routes>
            <Route path="/" element={<Top />} />
          </Routes>
        </Router>
      </DataContext.Provider>

      {/* // react-router-domがVersion 6になって書き方が変わったので注意 */}
    </>
  );
}

export default App;
