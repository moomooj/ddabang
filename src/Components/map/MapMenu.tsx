import styled from "styled-components";

function MapMenu() {
  return <MapMenuWrap>맵 메뉴</MapMenuWrap>;
}

export default MapMenu;

const MapMenuWrap = styled.div`
  width: 100%;
  min-width: 600px;
  height: 63px;
  padding: 0 20px;
  background-color: #fcfcfc;
  border: 1px solid red;
`;
