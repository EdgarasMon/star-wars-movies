import { useState, SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const TabNavigation = (props: {
  selectedPage: (selectedPage: string) => void;
}) => {
  const { selectedPage } = props;
  const [value, setValue] = useState("Films");
  const [labelTextColor, setLabelTextColor] = useState("secondary");

  const tabStyle = {
    color: labelTextColor === "secondary" ? "primary.main" : "secondary",
    fontFamily: "fantasy",
    fontSize: "30px",
  };

  const changePage = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    selectedPage(newValue);
    setLabelTextColor("primary");
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={value}
        onChange={changePage}
        textColor={value === "Films" ? "primary" : "secondary"}
        indicatorColor={value === "Films" ? "primary" : "secondary"}
      >
        <Tab value='Films' label='Films' sx={tabStyle} />
        <Tab value='About' label='About' sx={tabStyle} />
      </Tabs>
    </Box>
  );
};

export default TabNavigation;
