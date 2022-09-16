import styled from "styled-components";

const SmallCard = styled.div`
  width: 900px;
  height: auto;
  margin-top: 20px;
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

  h3{
    margin-top: 5px
  }

  p{
    margin-bottom: 10px
  }
  
`
const LargeCard = styled.div`
  width: 900px;
  height: 600px;
  display: grid, inline-block;
  gap: 10px;
  margin-top: 20px;
  padding: 12px 20px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px outset red;
  box-shadow: 2px 6px 4px black;
  box-sizing: border-box;
  align-items: center;
  align-content: center;
  transition: 0.3s;

  h1{
   padding: 25px
  }

`
const CardDetails = styled.div`
 h2{
  padding-top: 30px;
  font-weight: normal
 }

 h3{
  float;
  font-weight: normal; 
  margin: 20px
 }

`
export default SmallCard;
export { LargeCard, CardDetails };