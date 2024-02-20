import React from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <News key="home" pageSize={pageSize} country="in" category="" />
          }
        />
        <Route
          path="/business"
          element={
            <News
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News
              key="health"
              pageSize={pageSize}
              country="in"
              category="health"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
