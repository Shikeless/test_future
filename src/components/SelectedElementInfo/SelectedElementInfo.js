import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Paper, Typography, Box } from "@material-ui/core";
import { useStyles } from "./styles.js";
import { getData } from "../../modules/Loader/";

const MapStateToProps = state => ({
  data: getData(state)
});

function SelectedElementInfo(props) {
  useEffect(() => {}, [props.index]);

  const classes = useStyles();

  if (props.index !== null) {
    return (
      <Paper className={classes.root}>
        <Box p={2}>
          <Typography variant="h6" gutterBottom align="center">
            Details
          </Typography>
          {["id", "firstName", "lastName", "email", "phone"].map(
            (item, index) => (
              <p key={index}>
                <b>{item}: </b>
                {props.data[props.index][item]}
              </p>
            )
          )}
          <b>Adress: </b>
          <ul>
            {Object.keys(props.data[props.index].address).map((item, index) => (
              <li key={index}>
                <b>{item}: </b>
                {props.data[props.index].address[item]}
              </li>
            ))}
          </ul>
          <p>
            <b>Desription: </b>
            {props.data[props.index].description}
          </p>
        </Box>
      </Paper>
    );
  }
  return null;
}

export default connect(MapStateToProps, null)(SelectedElementInfo);
