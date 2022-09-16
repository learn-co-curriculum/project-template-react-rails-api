import styled from "styled-components";

// login and signup form
const UserForm = styled.div`
  background-color: #fff;
  border: 2px outset red;
  box-shadow: 2px 6px 4px black;
  padding-bottom: 30px;
  padding-top: 20px;
  border-radius: 15px;
  text-align: center;
  height: auto;
  max-width: 450px;

  input[type=text], input[type=password] {
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 15px;
  box-sizing: border-box;

  p{
    margin-top: 20px
  }

  h2 { margin-bottom: 10px }

}
`
// LargeCard Forms
const Form = styled.form`
	display: grid;
	gap: 10px;
`
const Select = styled.select`
	width: 100%;
  height: 35px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 15px;
	font-size: large;

	option{	
		color: black;
		display: flex;
		white-space: pre;
		min-height: 20px;
	}
`
const Label = styled.label`
	font-weight: bold;
	font-size: large;
`

const TextArea = styled.textarea`
	border: 1px solid black;
  border-radius: 15px;
	height: 100px;
	width: 850px;
	font-size: medium;
	display: flex
`

const Input = styled.input`
	width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 15px;
  box-sizing: border-box;
	font-size: large;
`


export default UserForm;
export {Form, Select, TextArea, Label, Input };