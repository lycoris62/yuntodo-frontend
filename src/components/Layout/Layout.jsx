import { Container } from "@mui/material";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container fixed maxWidth={"sm"}>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
