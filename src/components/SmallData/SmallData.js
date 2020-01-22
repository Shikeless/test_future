import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./SmallData.css";
import LoadingBar from "../LoadingBar";
import AddingForm from "../AddingForm";
import { Paper, Button, Box } from "@material-ui/core";
import { smallDataRequest, getSmallData } from "../../modules/Loader/";

const MapStateToProps = state => ({
  smallData: getSmallData(state)
});

const MapDispatchToProps = {
  smallDataRequest
};

function SmallData(props) {
  useEffect(() => {
    props.smallDataRequest();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (Object.entries(props.smallData).length === 0) return <LoadingBar />;
  return (
    <>
      <Box py={2}>
        {isOpen ? (
          <AddingForm />
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              toggle();
            }}
          >
            Добавить
          </Button>
        )}

        <h1>SMALL DATA</h1>
      </Box>
    </>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(SmallData);
