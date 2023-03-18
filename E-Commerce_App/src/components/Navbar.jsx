import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 60px;
`;
//changes done in padding 1px it was 10px before
const Wrapper = styled.div`
  padding: 1px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-family: "Urbanist", sans-serif;
`;
//removed border -  border: 0.5px solid lightgray;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  font-family: "Audiowide", sans-serif;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  font-family: "Urbanist", sans-serif;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

//added background color to wrapper and added fontsize and marginleft to search

export default function Navbar() {
  return (
    <Container>
      <Wrapper style={{ backgroundColor: "pink" }}>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search
              style={{ color: "gray", fontSize: "20px", marginLeft: "5px" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ANA.</Logo>
        </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
}
