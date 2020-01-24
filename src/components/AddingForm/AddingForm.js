import React from "react";
import { Paper, Button, Box } from "@material-ui/core";
import { Form, Field } from "react-final-form";
import { TextField } from "final-form-material-ui";
import { validate } from "../../helpers/validate";
import { useStyles } from "./styles.js";
import { addNewDataRequest } from "../../modules/Loader/";
import { connect } from "react-redux";

const MapDispatchToProps = {
  addNewDataRequest
};

function AddingForm(props) {
  const classes = useStyles();

  const onSubmit = values => {
    props.addNewDataRequest(
      //добавляем пустые объекты адреса и описания в передаваемый объект, так как в тз их нет в форме
      Object.assign(values, {
        address: {
          streetAddress: "",
          city: "",
          state: "",
          zip: ""
        },
        description: ""
      })
    );
  };

  return (
    // вместо активации кнопки после заполнения полей формы, добавлена отправка форму после прохождения валидации
    <Paper className={classes.formWindow}>
      <Box p={2}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting }) => (
            <form
              onSubmit={async event => {
                await handleSubmit(event);
              }}
              noValidate
            >
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
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" type="submit" disabled={submitting}>
                  Добавить запись
                </Button>
              </Box>
            </form>
          )}
        />
      </Box>
    </Paper>
  );
}

export default connect(null, MapDispatchToProps)(AddingForm);
