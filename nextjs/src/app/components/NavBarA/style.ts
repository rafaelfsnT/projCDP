"use client";
import styled from "styled-components";

export const CustomNavbar = styled.header`
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.253);
  background-color: #f8f8f8;
  color: #8fbd31;
  .nav-link {
    transition: color 0.3s, transform 0.3s, text-decoration 0.3s;
    position: relative;
    font-size: 1.1rem;
  }

  .nav-link:hover {
    transform: scale(1.1);
  }
  .nav-link:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #8fbd31;
    position: absolute;
    left: 0;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .nav-link:hover:after {
    transform: scaleX(1);
  }
`;

export const Login = styled.div`
  margin-right: 8px;
  color: #8fbd31;
`;

export const Logo = styled.div`
  img {
    max-width: 50%;
    height: auto;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;

  button {
    border-radius: 0 20px 20px 0;
    background-color: #8fbd31;
    border: 1px solid #ced4da;
    color: white;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;

    &:hover {
      background-color: #7cae29;
    }
  }
`;

export const HighlightButton = styled.button`
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
