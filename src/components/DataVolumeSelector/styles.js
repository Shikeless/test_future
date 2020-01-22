import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  formWindow: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    width: "300px",
    height: "120px",
    padding: "10px"
  }
}));
