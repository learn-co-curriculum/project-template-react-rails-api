import styled from "styled-components";

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  gap: 20px;
`

const ContentGrid = styled.div`
  height: 100%;
  margin: auto;
  text-align: center;
  display: block;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
  }
`
const FormGrid = styled.div`
  background-color: #fff;
  border: 2px outset red;
  box-shadow: 2px 6px 4px black;
  padding-bottom: 30px;
  padding-top: 20px;
  border-radius: 15px;
  text-align: center;
  height: auto;
  max-width: 450px;

  p{
    margin-top: 20px
    color: red;
  }

  h2{
    margin-bottom: 10px
  }

  input[type=text], input[type=password] {
  width: 90%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid black;
  border-radius: 15px;
  box-sizing: border-box;
}
`


export default MainGrid;
export { ContentGrid, FormGrid }
