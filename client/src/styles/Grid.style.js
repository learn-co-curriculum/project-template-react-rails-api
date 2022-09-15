import styled from "styled-components";

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 120px 1fr;
  gap: 20px;
`

const ContentGrid = styled.div`
  width: 50%;
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


export default MainGrid;
export { ContentGrid }
