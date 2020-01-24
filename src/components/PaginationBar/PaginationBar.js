import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import { Box } from "@material-ui/core";

const theme = createMuiTheme();

function PaginationBar(props) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {}, [props.length]);

  const history = useHistory();

  return (
    <Box>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={5}
          offset={offset}
          total={props.length}
          onClick={(e, offset) => {
            setOffset(offset);
            history.push(`${e.target.innerText}`);
          }}
        />
      </MuiThemeProvider>
    </Box>
  );
}

export default PaginationBar;
