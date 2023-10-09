import React from "react"
import PropTypes from "prop-types"

import { Delete } from "@material-ui/icons"
import Button from "@mui/material/Button"

// !definition of component
/**
 *
 * @param props -->
 * @description -->
 * @returns Button component
 */
// ! component

const CustomButton = (props) => {
  return props?.icon ? (
    <Button
      variant={props.type}
      startIcon={<Delete />}
      onClick={(e) => {
        props.onClick(e)
      }}
    >
      {props.title}
    </Button>
  ) : (
    <>
      <Button
        variant={props.type}
        onClick={(e) => {
          props.onClick(e)
        }}
      >
        {props.title}
      </Button>
    </>
  )
}

CustomButton.defaultProps = {
  type: "outlined",
  icon: false,
}

CustomButton.prototype = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.bool,
  onClick: PropTypes.func,
}

export default CustomButton
