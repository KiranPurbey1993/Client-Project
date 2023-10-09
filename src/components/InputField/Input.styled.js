import styled from "styled-components"

export const InputFieldContainer = styled.input`
  background: ${(props) => props.theme.background};
  border-radius: 15px;
  border: 0px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: 30px;
  color: white;
  padding-left: 15px;
  margin-bottom: 30px;
  &::placeholder {
    color: white;
  }
`
