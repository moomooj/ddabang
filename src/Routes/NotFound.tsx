import styled from "styled-components";
import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <>
      <Helmet title="페이지를 찾을 수 없습니다." />
      <NotFoundWrap>
        <h1>페이지를 찾을 수 없습니다.</h1>
      </NotFoundWrap>
    </>
  );
}

export default NotFound;

const NotFoundWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: px;
  font-weight: 700;
`;
