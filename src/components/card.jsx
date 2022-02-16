import styled from "styled-components";
import { Overlay } from "./Overlay";

export const Card = ({ item, handleSelect, isOpened }) => {
  return (
    <Wrapper>
      <div className="card">
        <img src={item.img} alt="Denim Jeans" />
        <div className="container">
          <h1>{item.name}</h1>
          <p className="price">{`${item.price} ${item.currency}`}</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <button onClick={() => handleSelect()}>Add to Cart</button>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 250px;
  max-height: 150px;
  cursor: pointer;
  .card {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    margin: auto;
    text-align: center;
    font-family: arial;
    border-bottom: none;
    padding: 1em;
  }
  .price {
    color: grey;
    font-size: 22px;
  }
  .card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  .card button:hover {
    opacity: 0.7;
  }
  img {
    max-width: 100%;
    height: 100%;
  }
  .container {
    padding: 2px 16px;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  }
`;
