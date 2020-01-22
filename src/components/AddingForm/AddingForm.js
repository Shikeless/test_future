import React from "react";
import { Paper, Button, Box } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { validate } from "../../helpers/validate";
import { useStyles } from "./styles.js";

function AddingForm(props) {
  const classes = useStyles();

  const onSubmit = () => {
    console.log("sending");
  };

  return (
    <Paper className={classes.formWindow}>
      <Box p={2}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Field
                className={classes.formElement}
                name="id"
                fullWidth
                required
                component={TextField}
                size="small"
                variant="outlined"
                type="text"
                label="Id"
              />
              <Field
                className={classes.formElement}
                name="firstName"
                fullWidth
                required
                component={TextField}
                size="small"
                variant="outlined"
                type="text"
                label="firstName"
              />
              <Field
                className={classes.formElement}
                name="lastName"
                fullWidth
                required
                component={TextField}
                size="small"
                variant="outlined"
                type="text"
                label="lastName"
              />
              <Field
                className={classes.formElement}
                name="email"
                fullWidth
                required
                component={TextField}
                size="small"
                variant="outlined"
                type="email"
                label="email"
              />
              <Field
                className={classes.formElement}
                name="phone"
                fullWidth
                required
                component={TextField}
                size="small"
                variant="outlined"
                type="text"
                label="phone"
              />
              <Button variant="contained" type="submit" disabled={submitting}>
                Войти в аккаунт
              </Button>
            </form>
          )}
        />
      </Box>
    </Paper>
  );
}

export default AddingForm;
