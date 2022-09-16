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
  align-items: center;
  justify-content: center;
`
export default MainGrid;
export { ContentGrid }
