import { Item as Iitem } from "../model/item.model";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ItemTypeButtons from "../components/Item/ItemTypeButtons";
import ItemClassButtons from "../components/Item/ItemClassButtons";
import ItemCard from "../components/Item/ItemCard";
import { stateType } from "./Monster";
import ScrollTopButton from "../components/Common/ScrollTopButton";

const Item = () => {
  let item = useSelector((state: stateType) => {
    return state.item;
  });

  return (
    <ListStyle>
      <div className="container">
        <h1>아이템 목록({item.length}종)</h1>
        <div className="btn-container">
          <ItemTypeButtons />
          <ItemClassButtons />
        </div>
        <div className="main">
          {item.map((tem: Iitem, idx: number) => {
            return <ItemCard tem={tem} idx={idx} />;
          })}
        </div>
      </div>
      <ScrollTopButton />
    </ListStyle>
  );
};

export const ListStyle = styled.div`
  background-color: black;
  .container {
    h1 {
      margin-bottom: 20px;
    }
  }
  .main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 768px) {
    .main {
      grid-template-columns: 1fr;
    }
  }
`;

export default Item;
