import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function SortingButton(props) {
  return props.direction ? (
    <ArrowDropDownIcon id={props.id} />
  ) : (
    <ArrowDropUpIcon id={props.id} />
  );
}
export default SortingButton;
