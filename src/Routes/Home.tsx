import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { changeIsHome } from "../Reducers/options";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeIsHome({ isHome: true }));
  }, [dispatch]);
  return (
    <HomeWrap>
      <VisualWrap>
        <p>비주얼 섹션</p>
      </VisualWrap>
    </HomeWrap>
  );
}

export default Home;

const HomeWrap = styled.div``;

const VisualWrap = styled.div`
  margin-top: -80px;
  width: 100%;
  height: 300px;
  padding: 80px 20px 0 20px;
  background: linear-gradient(
    320.83deg,
    rgb(127, 135, 224) -13.2%,
    rgb(38, 73, 202) -13.19%,
    rgb(106, 118, 223) 46.63%,
    rgb(50, 176, 247) 107.09%
  );
  display: flex;
  justify-content: center;
  p {
    width: 100%;
    max-width: 1200px;
    border: 1px solid red;
  }
`;
