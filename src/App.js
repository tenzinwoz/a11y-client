import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import "./app.scss";
import Landing from "./container/Landing";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/results" element={<>Results page</>} />
        <Route path="/results/:id" element={<>Single Result page</>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
