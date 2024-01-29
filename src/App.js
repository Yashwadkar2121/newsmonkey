import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import News from "./components/News.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export class App extends Component {
  pageSize = 6;
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="home"
                pageSize={this.pageSize}
                country="in"
                category=""
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                pageSize={this.pageSize}
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
                pageSize={this.pageSize}
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
                pageSize={this.pageSize}
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
                pageSize={this.pageSize}
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
                pageSize={this.pageSize}
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
                pageSize={this.pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
