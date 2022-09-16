import styled from "styled-components";

const SmallCard = styled.div`
  margin-top: 20px;
  max-width: 800px;
  height: 100px;
  transition: 0.3s;
  border-radius: 10px;
  background-color: #fff;
  border: 2px outset red;
  box-shadow: 2px 6px 4px black;
  box-sizing: border-box;
  display: block;
  align-items: center;
  align-content: center;
  padding: 12px 20px;
`
const LargeCard = styled.div`
  margin-top: 20px;
  max-width: 900px;
  height: 400px;
  transition: 0.3s;
  border-radius: 10px;
  background-color: #fff;
  border: 2px outset red;
  box-shadow: 2px 6px 4px black;
  box-sizing: border-box;
  display: block;
  align-items: center;
  align-content: center;
  padding: 12px 20px;

  h2{
    margin-bottom: 20px
  }

  h4{
    margin-top: 10px
  }
`
export default SmallCard;
export { LargeCard };