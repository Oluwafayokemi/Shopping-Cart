import React, { useState } from "react";
import styled from "styled-components";
import { Grid } from "../../container/grid";
import { Card } from "../card";
import { Overlay } from "../Overlay";

const items = [
  {
    id: 1,
    name: "samsung",
    price: 5,
    img: "https://www.w3schools.com/html/img_girl.jpg",
    currency: "USD",
  },
  {
    id: 2,
    name: "galaxy",
    price: 8,
    img: "https://www.w3schools.com/html/pic_trulli.jpg",
    currency: "USD",
  },
  {
    id: 3,
    name: "tv",
    price: 7,
    img: "https://www.w3schools.com/html/img_chania.jpg",
    currency: "USD",
  },
];

const Items = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleSelect = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Wrapper>
      <div className="item-list">
        <h1>Shop Online</h1>
        <Grid>
          {items.map((item, index) => (
            <div key={index}>
              <Card key={item.id} item={item} handleSelect={handleSelect} />
            </div>
          ))}
        </Grid>
      </div>
      {isOpened && <Overlay />}
    </Wrapper>
  );
};

export default Items;

const Wrapper = styled.div``;
