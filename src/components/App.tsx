import "../App.css";
import { useState } from "react";
import TabNavigation from "./TabNavigation";
import Films from "./Films";
import About from "./About";

function App() {
  const [selectedPage, setSelectedPage] = useState("Films");

  const setPageCB = (selectedPage: string) => {
    setSelectedPage(selectedPage);
  };

  return (
    <>
      <TabNavigation selectedPage={setPageCB} />
      {selectedPage === "Films" && <Films />}
      {selectedPage === "About" && <About />}
    </>
  );
}

export default App;
