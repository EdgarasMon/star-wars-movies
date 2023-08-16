import "../../styles/about.css";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import IconButton from "@mui/material/IconButton";

const About = () => {
  const [disableMusic, setDisableMusic] = useState(true);
  const turnOffSound = () => {
    setDisableMusic(false);
    if (!disableMusic) {
      setDisableMusic(true);
    }
  };

  return (
    <>
      <Box>
        <IconButton onClick={turnOffSound} data-testid='volume-button'>
          {disableMusic ? (
            <VolumeDownIcon color='primary' fontSize='large' />
          ) : (
            <VolumeOffIcon color='primary' fontSize='large' />
          )}
          {disableMusic && (
            <Box className='audio-controls'>
              <audio autoPlay>
                <source
                  src='/Star_Wars_Main_Theme_Song.mp3'
                  type='audio/mpeg'
                ></source>
              </audio>
            </Box>
          )}
        </IconButton>
      </Box>
      <Box className='crawl'>
        <h1 className='h1'>Episode IV</h1>
        <h2 className='h2'>A New Hope</h2>
        <p className='p'>
          It is a period of civil war. Rebel spaceships, striking from a hidden
          base, have won their first victory against the evil Galactic Empire.
        </p>
        <p className='p'>
          During the battle, Rebel spies managed to steal secret plans to the
          Empire's ultimate weapon, the DEATH STAR, and space station with
          enough power to destroy an entire planet.
        </p>
        <p className='p'>
          Pursued by the Empire's sinister agents, Princess Leia races home
          aboard her starship, custodian of the stolen plans that can save her
          people and restore freedom to the galaxy ....
        </p>
      </Box>
    </>
  );
};

export default About;
