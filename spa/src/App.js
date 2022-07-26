import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Header from "./components/header";
import { StyledAppContent, AppLayout } from './styles/layout';

const About = () => "this is about";

const App = () => (
  <AppLayout className="App">
    <Header />
    <StyledAppContent>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </StyledAppContent>
    <Footer />
  </AppLayout>
);;

export default App;
