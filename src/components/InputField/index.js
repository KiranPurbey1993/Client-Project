import React, { useContext, useState } from "react"
// import Style from "./style.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { ThemeContext } from "styled-components"
import { InputFieldContainer } from "./Input.styled"

// !definition of component
/**
 *
 * @param props --> type , name, defaultValue, required, label, icon, onChange, onDelete and onBlur function
 * @description -->  type=> input type, name=> for id and name, required=> boolean, icon => object {name: faIcon}
 * @returns Input Field component
 */
// ! component
const InputField = (props) => {
  const themeContext = useContext(ThemeContext)
  const [error, setError] = useState(null)

  function handleChange(e) {
    setError(null)
    if (props.onChange) {
      props.onChange(e)
    }
  }

  return (
    <div>
      <InputFieldContainer
        type={props?.type}
        onChange={(e) => {
          handleChange(e)
        }}
        id={props?.name}
        name={props?.name}
        className={``}
        onInvalid={(e) => {
          e.preventDefault()
          e.target.focus()
          setError("true")
        }}
        onBlur={props?.onBlur}
        required={props?.required}
        autocomplete="off"
        value={props.value}
        theme={themeContext}
      />
    </div>
  )
}

export default InputField
