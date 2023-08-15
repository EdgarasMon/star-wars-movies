import { useState, useEffect } from "react";
import axios from "axios";
import IPeople from "../interfaces/IPeople";

const usePeopleData = (props: { episodePeople: string[] }) => {
  const { episodePeople } = props;
  const [people, setPeople] = useState<IPeople[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const requests = episodePeople.map((apiRequest) => axios.get(apiRequest));
    Promise.all(requests)
      .then((res) => {
        const peopleData = res.map((res) => res.data);
        setPeople(peopleData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching people items:", error);
        setError(true);
      });
  }, [episodePeople]);

  return { people, loading, error };
};

export default usePeopleData;
