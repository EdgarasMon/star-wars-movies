import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";

const TabNavigation = () => {
  const location = useLocation();

  const tabStyle = {
    color: "primary.main",

    fontFamily: "fantasy",
    fontSize: "30px",
  };

  return (
    <Tabs centered value={location.pathname}>
      <Tab value='Films' label='Films' sx={tabStyle} component={Link} to='/' />
      <Tab
        value='About'
        label='About'
        sx={tabStyle}
        component={Link}
        to='/about'
      />
    </Tabs>
  );
};

export default TabNavigation;
