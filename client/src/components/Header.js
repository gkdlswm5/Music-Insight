import React from "react";
import { Container } from "react-bootstrap";

function Header() {
  return (
    <Container
      style={{
        paddingTop: "200px",
        maxWidth: "500px",
        fontWeight: "bold",
        fontFamily: "serif",
        fontSize: "26px",
      }}>
      Music Insight
    </Container>
  );
}

export default Header;
