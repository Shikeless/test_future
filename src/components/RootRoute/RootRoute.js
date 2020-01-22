import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./RootRoute.css";
import DataVolumeSelector from "../DataVolumeSelector";
import SmallData from "../SmallData";
import Stub from "../Stub";
import BigData from "../BigData";
import { useStyles } from "./styles.js";
import { Box, Paper, Typography, Grid, Button } from "@material-ui/core";

function Root() {
  const classes = useStyles();

  return (
    <Box p={2}>
      <BrowserRouter>
        <DataVolumeSelector />
        <Box>
          <Switch>
            <Route exact path="/SmallData" component={SmallData} />
            <Route exact path="/BigData" component={BigData} />
            <Route exact path="/" component={Stub} />
            <Redirect to="/" />
          </Switch>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default Root;
