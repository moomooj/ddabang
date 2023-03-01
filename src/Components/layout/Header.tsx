import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IState } from "../../Reducers/initInterface";
import { changeIsHome } from "../../Reducers/options";

function Header() {
  const { isHome } = useSelector((state: IState) => state.options);
  const isHomeMatch = useMatch("/");
  console.log(isHomeMatch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isHomeMatch) {
      dispatch(changeIsHome({ isHome: true }));
    }
    dispatch(changeIsHome({ isHome: false }));
  }, [dispatch, isHomeMatch]);

  const goHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <HeaderWrap isHome={isHome}>
      <Logo onClick={goHome}>따방</Logo>
      <nav>
        <SingleLink to={"/map"}>
          <p>지도</p>
        </SingleLink>
        <SingleLink to={"/제작중"}>
          <p>관심목록</p>
        </SingleLink>
        <ButtonLink to={"/제작중"}>
          <p>로그인 | 회원가입</p>
        </ButtonLink>
      </nav>
    </HeaderWrap>
  );
}

export default Header;

const HeaderWrap = styled.header<{ isHome: boolean }>`
  width: 100%;
  min-width: 600px;
  height: 80px;
  border-bottom: 1px solid rgb(231, 231, 231);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props: any) => (props.isHome ? "#fff" : "#000")};
  nav {
    display: flex;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      font-weight: 500;
    }
  }
`;

const Logo = styled.div`
  font-size: 29px;
  font-weight: 900;
  text-align: center;
  width: 71px;
  height: 31px;
`;

const SingleLink = styled(Link)`
  margin: 0 0 0 40px;
  font-size: 14px;
`;

const ButtonLink = styled(Link)`
  padding: 5px 15px;
  display: flex;
  margin-left: 40px;
  font-size: 14px;
  border: 1px solid;
  background-color: transparent;
`;
