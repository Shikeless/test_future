import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { dataRequest } from "../../modules/Loader/";
import { connect } from "react-redux";

const MapDispatchToProps = {
  dataRequest
};

function DataVolumeSelector(props) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Выберите формат отображения
      </Typography>
      <ButtonGroup aria-label="outlined primary button group">
        <Button
          component={Link}
          to="/Data/1"
          onClick={() => {
            props.dataRequest("small");
          }}
        >
          Маленький
        </Button>
        <Button
          component={Link}
          to="/Data/1"
          onClick={() => {
            props.dataRequest("big");
          }}
        >
          Большой
        </Button>
      </ButtonGroup>
    </>
  );
}

export default connect(null, MapDispatchToProps)(DataVolumeSelector);
