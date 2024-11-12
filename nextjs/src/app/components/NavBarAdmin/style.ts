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


export const SidebarHighlightButton = styled.button`
   background-color: #8fbd31;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #7aa72a;
    transform: scale(1.05);
  }
  `;
