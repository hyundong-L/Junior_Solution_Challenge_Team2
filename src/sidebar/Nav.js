import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavItem from "./NavItem";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../user/authContext/AuthContext";

const Side = styled.div`
  display: flex;
  border-right: 1px solid black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 15%;
`;

const Menu = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MenuItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-bottom: 200%;

  &:hover{
    color: green;
  }
  &.active{
    color: green;
  }
`;

function Nav() {
  const navigate=useNavigate();
  const { userLoggedIn } = useAuth();

  const menus = [
    { name: "재활용", path: "/recycle" },
    { name: "식습관", path: "/eating" },
    { name: "전기절약", path: "/electric" }
  ];

  return (
    <>
      {userLoggedIn && window.location.pathname !== "/homepage"
        ?
        <>
          <Side>
            <Menu>
              {menus.map((menu, index) => (
                <MenuItem to={menu.path} exact="true" key={index} activeclassname="active">
                  <NavItem menu={menu} />
                </MenuItem>
              ))}
            </Menu>
          </Side>
        </>
        :
        <></>
      }
    </>
  );
}

export default Nav;
