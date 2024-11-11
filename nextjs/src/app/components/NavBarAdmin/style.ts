'use client'
import styled from "styled-components";

export const Sidebar = styled.nav`
  width: 250px;
  height: 100vh;
  position: fixed;
  background-color: #f8f9f8;
  padding-top: 1rem;
  border-right: 1px solid #ddd;
`;

export const SidebarLogo = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  img {
    width: 80%;
  }
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SidebarItem = styled.li`
  margin: 0.5rem 0;
`;


export const SidebarHighlightButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  color: #fff;
  background-color: #ff6347;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #ff4500;
  }
`;
