import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  app: {
    backgroundSize: "cover",
    backgroundImage: "url(./bg.jpg)",
    height: "100%",
    width: "100%"
  },

  formWindow: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    width: "90%",
    padding: "10px"
  }
}));
