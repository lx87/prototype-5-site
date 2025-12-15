import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomeScreen from "./screens/HomeScreen";
import IconsScreen from "./screens/IconsScreen";
import LoadersScreen from "./screens/LoadersScreen";
import InteractiveScreen from "./screens/InteractiveScreen";
import ShowcaseScreen from "./screens/ShowcaseScreen";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/icons" element={<IconsScreen />} />
          <Route path="/loaders" element={<LoadersScreen />} />
          <Route path="/interactive" element={<InteractiveScreen />} />
          <Route path="/showcase" element={<ShowcaseScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
