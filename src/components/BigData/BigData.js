import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { bigDataRequest, getBigData } from "../../modules/Loader/";

const MapStateToProps = state => ({
  bigData: getBigData(state)
});

const MapDispatchToProps = {
  bigDataRequest
};

function BigData(props) {
  useEffect(() => {
    props.bigDataRequest();
  }, []);

  console.log();

  if (Object.entries(props.bigData).length === 0) return <h1>LOADING</h1>;
  return (
    <div>
      <h1>BIGDATA</h1>
    </div>
  );
}

export default connect(MapStateToProps, MapDispatchToProps)(BigData);
