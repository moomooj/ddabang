import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import Home from "./Routes/Home";
import Map from "./Routes/Map";
import NotFound from "./Routes/NotFound";
import Header from "./Components/layout/Header";
import Footer from "./Components/layout/Footer";
import { useSelector } from "react-redux";
import { IState } from "./Reducers/initInterface";

const GolbalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  margin: 0 auto;
  font-family: 'Pretendard-Regular';
  font-weight: 500;
  line-height: 1.2;
  background-color: #fcfcfc;
  ::-webkit-scrollbar {
    width: 8px;  /* 스크롤바의 너비 */
}

::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #bfbfbf5f; /* 스크롤바의 색상 */
    border-radius: 10px;
}

::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);  /*스크롤바 뒷 배경 색상*/
}
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}


`;

function App() {
  const isDark = useSelector((state: IState) => state.options.isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GolbalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
