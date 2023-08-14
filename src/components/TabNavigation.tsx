import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabNavigation(props: {
  selectedPage: (selectedPage: string) => void;
}) {
  const { selectedPage } = props;
  const [value, setValue] = useState("Films");
  const [labelTextColor, setLabelTextColor] = useState("secondary");
  // const [indicatorColor, setIndicatorColor] = useState("secondary");

  // pataisyti problema kad pirmam renderiui butu about label pilkas

  const changePage = (event: React.SyntheticEvent, newValue: string) => {
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
        <Tab
          value='Films'
          label='Films'
          sx={{
            color:
              labelTextColor === "secondary" ? "primary.main" : "secondary",
            fontFamily: "fantasy",
            fontSize: "30px",
          }}
        />
        <Tab
          value='About'
          label='About'
          sx={{
            color:
              labelTextColor === "secondary" ? "primary.main" : "secondary",
            fontFamily: "fantasy",
            fontSize: "30px",
          }}
        />
      </Tabs>
    </Box>
  );
}