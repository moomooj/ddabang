import styled from "styled-components";

function MapSide() {
  const TATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <MapSideWrap>
      {TATA.map((items: any) => (
        <div>
          <img src="" alt="" />
          <div>
            <h1>전세 3억</h1>
            <p>서울특별시 서대문구 홍제동</p>
            <p>투룸, 33.64m, 1층/4층</p>
            <p>홍제역 도보 5분 역세권 즉시입주 배고파요 정말로</p>
          </div>
        </div>
      ))}
    </MapSideWrap>
  );
}

export default MapSide;

const MapSideWrap = styled.div`
  width: 400px;
  height: calc(100vh - 143px);
  background-color: #fcfcfc;
  border: 1px solid red;
  border-top: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #bfbfbf5f; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1); /*스크롤바 뒷 배경 색상*/
  }
`;
