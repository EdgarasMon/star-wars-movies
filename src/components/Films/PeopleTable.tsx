import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IPeople from "../../interfaces/IPeople";
import { Alert, LinearProgress, Snackbar, Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PeopleTable = (props: { episodePeople: string[] }) => {
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

  return (
    <>
      {loading ? (
        <>
          <h3 color='purple'>Fetching People data </h3>
          <LinearProgress color='secondary' sx={{ m: 1 }} />
        </>
      ) : (
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table
            stickyHeader
            sx={{
              minWidth: 650,
              mt: 2,
            }}
          >
            {people.length ? (
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Birth year</StyledTableCell>
                  <StyledTableCell>Gender</StyledTableCell>
                  <StyledTableCell>Mass</StyledTableCell>
                </StyledTableRow>
              </TableHead>
            ) : (
              <Typography></Typography>
            )}

            <TableBody>
              {people &&
                people.map((row: IPeople, index: number) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell sx={{ color: "white" }}>
                      {`${index + 1}. `}
                      {row.name !== "unknown" ? row.name : "-"}
                    </StyledTableCell>
                    <StyledTableCell sx={{ color: "white" }}>
                      {row.birth_year !== "unknown" ? row.birth_year : "-"}
                    </StyledTableCell>
                    <StyledTableCell sx={{ color: "white" }}>
                      {row.gender !== "unknown" ? row.gender : "-"}
                    </StyledTableCell>
                    <StyledTableCell sx={{ color: "white" }}>
                      {row.mass !== "unknown" ? row.mass : "-"}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

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

export default PeopleTable;
