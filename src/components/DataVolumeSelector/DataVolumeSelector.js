import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./DataVolumeSelector.css";
import { useStyles } from "./styles.js";
import { Typography, Button, ButtonGroup } from "@material-ui/core";

function DataVolumeSelector() {
  const [tasks, setTasks] = useState([]);

  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Выберите формат отображения
      </Typography>
      <ButtonGroup aria-label="outlined primary button group">
        <Button component={Link} to="/SmallData">
          Маленький
        </Button>
        <Button component={Link} to="/BigData">
          Большой
        </Button>
      </ButtonGroup>
    </>
  );
}

export default DataVolumeSelector;
