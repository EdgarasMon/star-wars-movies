import { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Alert, Button, LinearProgress, Paper, Snackbar } from "@mui/material";
import IFilms from "../interfaces/IFilms";
import PeopleTable from "./PeopleTable";

export default function FilmCard() {
  const [films, setFilms] = useState([]);
  const [episodePeople, setEpisodePeople] = useState<string[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const filmsAPI = "https://swapi.dev/api/films/";
    axios
      .get(filmsAPI)
      .then((res: any) => {
        setFilms(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching films items:", error);
        setError(true);
      });
  }, []);

  const showPeople = (episode_id: number) => {
    const peopleInEpisode: IFilms[] = films.filter(
      (el: IFilms) => episode_id === el.episode_id
    );

    if (peopleInEpisode.length > 0) {
      setEpisodePeople(peopleInEpisode[0].characters);
    }
  };

  return (
    <>
      {!films.length ? (
        <>
          <h3 color='blue'>Fetching Films data</h3>
          <LinearProgress
            sx={{
              mt: 2,
            }}
          />
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            alignContent: "center",
            mt: 4,
          }}
        >
          {films.map((el: IFilms) => (
            <Card
              sx={{
                minWidth: 400,
                m: 1,
              }}
              key={el.episode_id}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                  }}
                >
                  <Typography variant='h5' component='div'>
                    {el.title}
                  </Typography>
                  <Typography color='text.secondary'>
                    Release date: {el.release_date}
                  </Typography>
                  <CardActions sx={{ mb: -2, mt: 2 }}>
                    <Button
                      variant='outlined'
                      onClick={() => showPeople(el.episode_id)}
                    >
                      Show people
                    </Button>
                  </CardActions>
                </Box>

                <Box
                  sx={{
                    "& > :not(style)": {
                      m: 1,
                      width: 80,
                      height: 80,
                    },
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignContent: "center",
                      justifyContent: "center",
                      "& > :not(style)": {
                        m: 1,
                        width: 80,
                        height: 80,
                      },
                    }}
                  >
                    Episode: {el.episode_id}
                  </Paper>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
      <PeopleTable episodePeople={episodePeople} />
      {error && (
        <Snackbar autoHideDuration={5000}>
          <Alert severity='error' sx={{ width: "100%" }}>
            Failed to fetch from api try again
          </Alert>
        </Snackbar>
      )}
    </>
  );
}
