import styled from "styled-components";
import cross from "../images/MedicCrossWhite.png"

const MenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
`

const MenuBack = styled.div`
  display: grid;
  position: relative;
  grid-template-rows: 35px;
  justify-content: right;
  align-items: baseline;
  height: 100px;
  width: 100px;
  background-image: url(${props => props.varImg});
  background-size: 100px;
  background-repeat: no-repeat;

  div {    
    text-align: center;
    display: inline-block;
  }
`

const MenuBurger = styled.div`
  position: absolute;
`

const MenuDropdown = styled.div`
  display: block
`

export default MenuBack
export { MenuBox, MenuDropdown, MenuBurger }