import styled, { createGlobalStyle } from "styled-components";
import { CssBaseline } from "@mui/material";
import Header from "./Header";
import CardDemo from "./CardDemo";

const GlobalStyles = createGlobalStyle`
`;

export default function Page({ children }) {
  return (
    <div>
      <CssBaseline />
      <GlobalStyles />
      <Header />
      {children}
      <CardDemo />
    </div>
  );
}
