import "../App.css";
import { useState } from "react";
import TabNavigation from "./TabNavigation";
import FilmsCards from "./Films/FilmsCards";
import About from "./About/About";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Films");

  const setPageCB = (selectedPage: string) => {
    setSelectedPage(selectedPage);
  };

  return (
    <>
      <TabNavigation selectedPage={setPageCB} />
      {selectedPage === "Films" && <FilmsCards />}
      {selectedPage === "About" && <About />}
    </>
  );
};

export default App;
