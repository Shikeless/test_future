import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoadingBar from "../LoadingBar";
import AddingForm from "../AddingForm";
import PaginationBar from "../PaginationBar";
import SelectedElementInfo from "../SelectedElementInfo";
import SortingButton from "../SortingButton";
import {
  Paper,
  Button,
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  InputBase,
  Divider,
  IconButton,
  Grid
} from "@material-ui/core";
import { useStyles, StyledTableCell, StyledTableRow } from "./styles.js";
import {
  getData,
  getError,
  searchingRequest,
  sortingRequest,
  restoreDataRequest,
  getIsLoading
} from "../../modules/Loader/";
import { Cancel, Search } from "@material-ui/icons";

//объект с именами колонок и айдишниками для хидера таблицы, и для передачи информации в хелперы
const columns = [
  { name: "Id", id: "id" },
  { name: "First Name", id: "firstName" },
  { name: "Last Name", id: "lastName" },
  { name: "Phone", id: "phone" },
  { name: "Email", id: "email" },
  { name: "Address", id: "address" },
  { name: "Descripton", id: "description" }
];

const MapStateToProps = state => ({
  data: getData(state),
  error: getError(state),
  isLoading: getIsLoading(state)
});

const MapDispatchToProps = {
  searchingRequest,
  sortingRequest,
  restoreDataRequest
};

function DataTable(props) {
  const classes = useStyles();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [search, setSearch] = useState("");
  const [activeColumn, setActiveColumn] = useState("");
  const [direction, setDirection] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [props.data]);

  if (props.data === null) return <Redirect to="/" />;
  if (props.error !== null) return <h1>{props.error}</h1>;
  if (props.isLoading) return <LoadingBar />;

  //слайсер для строк текущей страницы таблицы
  let page = props.data.slice(
    props.match.params.page * 50 - 50,
    props.match.params.page * 50
  );

  return (
    <>
      <Box py={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            {isOpen ? (
              <AddingForm />
            ) : (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Добавить
              </Button>
            )}
            <Box py={2}>
              <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="Search"
                  value={search}
                  onChange={event => {
                    setSearch(event.target.value);
                  }}
                  //обработчик для кнопки Enter в инпуте поиска
                  onKeyPress={event => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      props.searchingRequest(search);
                      history.push(`1`);
                    }
                  }}
                />
                <IconButton
                  onClick={() => {
                    setSearch("");
                    props.restoreDataRequest();
                    history.push(`1`);
                  }}
                  className={classes.iconButton}
                >
                  <Cancel />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton
                  onClick={() => {
                    props.searchingRequest(search);
                    history.push(`1`);
                  }}
                  className={classes.iconButton}
                >
                  <Search />
                </IconButton>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        <Box py={2}>
          <TableContainer component={Paper} className={classes.tableBody}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  {columns.map((item, index) => (
                    <StyledTableCell
                      key={index}
                      id={item.id}
                      onClick={event => {
                        setActiveColumn(event.target.id);
                        props.sortingRequest({
                          direction: direction,
                          column: event.target.id
                        });
                        return setDirection(!direction);
                      }}
                    >
                      {item.name}
                      {item.id === activeColumn ? (
                        <SortingButton
                          id={item.id}
                          direction={direction}
                          onClick={() => {
                            setDirection(!direction);
                          }}
                        />
                      ) : null}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {page.map((data, index) => (
                  <StyledTableRow
                    onClick={() => {
                      setSelectedElement(index);
                    }}
                    key={index}
                  >
                    <StyledTableCell>{data.id}</StyledTableCell>
                    <StyledTableCell>{data.firstName}</StyledTableCell>
                    <StyledTableCell>{data.lastName}</StyledTableCell>
                    <StyledTableCell>{data.email}</StyledTableCell>
                    <StyledTableCell>{data.phone}</StyledTableCell>
                    <StyledTableCell>
                      Street Address: {data.address.streetAddress}
                      <br /> City: {data.address.city} <br /> State:{" "}
                      {data.address.state} <br /> Zip: {data.address.zip}
                    </StyledTableCell>
                    <StyledTableCell className={classes.description}>
                      {data.description}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <PaginationBar length={props.data.length} />
      </Box>
      <SelectedElementInfo index={selectedElement} />
    </>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(DataTable);
