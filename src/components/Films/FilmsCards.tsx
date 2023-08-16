import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Alert, Button, LinearProgress, Paper, Snackbar } from "@mui/material";
import IFilms from "../../interfaces/IFilms";
import PeopleTable from "./PeopleTable";
import paperInCard from "../../styles/paperInCard";
import useFilmsData from "../../hooks/useFilmsData";
import { useSelector } from "react-redux";

const FilmsCards = () => {
  let { films, episodePeople, error, showPeople } = useFilmsData();
  const films_ = useSelector((state: any) => state.films);
  const filmsDataFromRedux = films_.data;
  if (filmsDataFromRedux.length) {
    films = filmsDataFromRedux;
  }

  return (
    <>
      {!films.length ? (
        <>
          <h3 style={{ color: "#2196f3" }}>Fetching Films data</h3>
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
                  <Paper elevation={2} sx={paperInCard}>
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
            Failed to fetch data from api try again
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default FilmsCards;
