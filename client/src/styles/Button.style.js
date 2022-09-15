import styled from "styled-components";

const Button = styled.button`
  display:flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  width: 60px;
  border-radius: 10px;
  border: 2px ridge #d4af37;
  cursor: pointer;
  background: radial-gradient(farthest-corner at 0px 0px,
    #fff 0%, #aaa9ad 100%);

  img {
    width: 25px;
    height: auto;
  }

  :hover {
    background: radial-gradient(farthest-corner at 0px 0px,
    #fff 0%, #d4af37 100%);
  }
`
export default Button;