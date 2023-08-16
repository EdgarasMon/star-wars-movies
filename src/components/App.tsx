import "../App.css";
import TabNavigation from "./TabNavigation";
import FilmsCards from "./Films/FilmsCards";
import About from "./About/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <TabNavigation />
      <Routes>
        <Route path='/' element={<FilmsCards />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
