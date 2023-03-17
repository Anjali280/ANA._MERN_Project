import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          nihil, provident, laborum blanditiis laudantium fugit, non corrupti
          esse eius ratione quisquam tempore voluptas ea? Adipisci cum
          repellendus neque dolore vel!
        </Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}
