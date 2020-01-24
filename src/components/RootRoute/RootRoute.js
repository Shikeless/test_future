import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DataVolumeSelector from "../DataVolumeSelector";
import DataTable from "../DataTable";
import Stub from "../Stub";
import { Box } from "@material-ui/core";

function Root() {
  return (
    <Box p={2}>
      <BrowserRouter>
        <DataVolumeSelector />
        <Box>
          <Switch>
            <Route path="/Data/:page" component={DataTable} />
            <Route exact path="/" component={Stub} />
            <Redirect to="/" />
          </Switch>
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default Root;
