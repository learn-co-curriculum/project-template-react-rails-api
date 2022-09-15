import styled from "styled-components";

const SmallCard = styled.div`
  margin: 20px;
  width: 900px;
  height: 50px;
  transition: 0.3s;
  border-radius: 10px;
  background-color: #fff;
  border: 2px outset red;
  box-shadow: 2px 6px 4px black;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
`

const LargeCard = styled.div`
  width: 900px;
  height: 600px;
  transition: 0.3s;
  border-radius: 10px;
  background-color: #fff;
  border: 2px outset red;
  box-shadow: 2px 6px 4px black;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
`
export default SmallCard;
export { LargeCard };