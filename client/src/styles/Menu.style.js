import styled from "styled-components";
import cross from "../images/MedicCrossWhite.png"

const MenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
`

const MenuBack = styled.div`
  display: grid; 
  grid-template-rows: 30px 30px 30px;
  justify-content: center;
  align-items: baseline;
  height: 100px;
  width: 100px;
  background-image: url(${props => props.varImg});
  background-size: 100px;
  background-repeat: no-repeat;

  div {    
    text-align: center;
    display: inline-block;
    position: relative;
  }
`

const MenuBurger = styled.div`
  position: absolute;
`

const MenuDropdown = styled.div`  
  width: 88px;
  height: auto;
  background: white;
  border: 1px solid red;
  position: absolute;

  li > h4 {
    padding: 5px;
    margin: 0;
  }

  li > a {
    padding: 0px;
    font-weight: bold;
    color: black;
  }
`

export default MenuBack
export { MenuBox, MenuDropdown, MenuBurger }