import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import "./app.scss";
import Landing from "./container/Landing";
import Footer from "./component/Footer";
import Results from "./container/Results";
import SingleResult from "./container/SingleResult";
import About from "./container/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:id" element={<SingleResult />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
