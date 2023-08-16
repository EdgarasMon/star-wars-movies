import { useState, useEffect } from "react";
import axios from "axios";
import IFilms from "../interfaces/IFilms";
import { useDispatch } from "react-redux";
import { fetchFilmsData } from "../../src/components/redux/features/films/filmsSlice";

const useFilmsData = () => {
  const dispatch = useDispatch();

  const [films, setFilms] = useState([]);
  const [episodePeople, setEpisodePeople] = useState<string[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const filmsAPI = "https://swapi.dev/api/films/";
    axios
      .get(filmsAPI)
      .then((res) => {
        setFilms(res.data.results);
        dispatch(fetchFilmsData(res.data.results));
      })
      .catch((error) => {
        console.error("Error fetching films items:", error);
        setError(true);
      });
  }, [dispatch]);

  const showPeople = (episode_id: number) => {
    const peopleInEpisode: IFilms[] = films.filter(
      (el: IFilms) => episode_id === el.episode_id
    );

    if (peopleInEpisode.length > 0) {
      setEpisodePeople(peopleInEpisode[0].characters);
    }
  };

  return { films, episodePeople, error, showPeople };
};

export default useFilmsData;
