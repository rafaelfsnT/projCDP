import styled from 'styled-components';

export const CustomNavbar = styled.header`
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.253);
  background-color: #F8F8F8;
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

  input {
    border-radius: 20px 0 0 20px;
    border: 1px solid #ced4da;
    padding: 10px 15px;
    transition: border-color 0.3s ease;
    height: 38px; 
  }

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
