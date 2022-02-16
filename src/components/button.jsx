import styled from "styled-components";

export const Button = ({ label, onclick, type }) => {
  return (
    <StyledButton onclick={onclick} type={type}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 1em;
  color: #fff;
  font-weight: bold;
  background: #4CAF50;
  border: 2px solid #4CAF50; /* Green */
  box-shadow: 0 4px 4px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  cursor: pointer;
`;
