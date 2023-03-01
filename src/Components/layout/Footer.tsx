import { useSelector } from "react-redux";
import styled from "styled-components";
import { IState } from "../../Reducers/initInterface";

function Footer() {
  const { isHome } = useSelector((state: IState) => state.options);

  return isHome ? (
    <FooterWrap>
      <FooterWInfoWrap>
        <FooterTextWrap>
          <p>프론트엔드 개발자 | 오주영 | 경기도 부천시 </p>
          <p>
            <a href="tel:01039677604">01039677604</a> |{" "}
            <a href="mailto:bunnyju0@gmail.com">bunnyju0@gmail.com</a> | ©
            MOOMOOJ All Right Reserved.
          </p>
        </FooterTextWrap>
        <FooterSnsWrap>
          <a
            href="https://github.com/moomooj"
            target="_blank"
            rel="noopener noreferrer"
          >
            깃허브
          </a>
          <a
            href="https://open.kakao.com/o/sTFytvId"
            target="_blank"
            rel="noopener noreferrer"
          >
            카카오톡
          </a>
        </FooterSnsWrap>
      </FooterWInfoWrap>
    </FooterWrap>
  ) : null;
}

export default Footer;

const FooterWrap = styled.footer`
  width: 100%;
  background-color: #000;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterWInfoWrap = styled.div`
  width: 100%;
  max-width: 1200px;
  color: #acacac;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterTextWrap = styled.div`
  line-height: 17px;
`;

const FooterSnsWrap = styled.div`
  a {
    margin: 0 0 0 10px;
  }
`;
