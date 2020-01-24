import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
  table: {
    maxWidth: 1440
  },
  description: { overflow: "auto", maxWidth: 300 },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    bottom: 0
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: -3
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
