import styled from "styled-components";

const Button = styled.button`
  align-items: center;
  justify-content: center
  display: flex
  height: auto;
  width: 90%;
  font-size: large;
  font-weight: bold;
  margin-top: 10px;
  border-radius: 10px;
  border: 2px outset #D2E6F6;
  cursor: pointer;
  background: #E8F8FF;
  padding: 14px 20px;

  :hover {
    background: white
  }
`

const EditAndCancelButton = styled.button`
  font-size: large;
  padding: 14px 20px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px outset #D2E6F6;
  background: #E8F8FF;
  font-weight: bold;
  color:white

  :hover {
    background: white
  }
`
const SubmitButton = styled.button `
  font-size: large;
  padding: 14px 20px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px outset #D2E6F6;
  background: #E8F8FF;
  font-weight: bold;
  color:white

  :hover {
    background: #FFE8E8
  }
`


export default Button;
export { EditAndCancelButton, SubmitButton }