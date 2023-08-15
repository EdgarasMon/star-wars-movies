import "../App.css";
import { useState } from "react";
import TabNavigation from "./TabNavigation";
import FilmCard from "./Films/FilmCard";
import About from "./About/About";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("Films");

  const setPageCB = (selectedPage: string) => {
    setSelectedPage(selectedPage);
  };

  return (
    <>
      <TabNavigation selectedPage={setPageCB} />
      {selectedPage === "Films" && <FilmCard />}
      {selectedPage === "About" && <About />}
    </>
  );
};

export default App;
