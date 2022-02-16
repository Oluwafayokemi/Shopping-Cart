import styled from "styled-components";

export const Overlay = () => {
  return (
    <Wrapper>
      <div className="overlay">
        <div className="text">Checkout</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    cursor: pointer;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 50px;
    color: white;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;
