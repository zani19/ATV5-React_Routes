import styled from "styled-components";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RGB from "./pages/RGB";
import HSLA from "./pages/HSLA";
import CMYK from "./pages/CMYK";

export default function App() {
  return (
    <BrowserRouter>
      <WrapperSld>
        <Menu />
      </WrapperSld>
      <Routes>
        <Route path="/rgb" element={<RGB/>} />
        <Route path="/hsla" element={<HSLA/>} />
        <Route path="/cmyk" element={<CMYK/>} />
      </Routes>
    </BrowserRouter>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
