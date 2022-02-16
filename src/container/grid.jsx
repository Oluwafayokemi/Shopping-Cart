import styled from "styled-components";

export const Grid = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  padding: 1em;
`;
