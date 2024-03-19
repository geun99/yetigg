import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { stateType } from "./Monster";
import { Item } from "../model/item.model";
import ItemInfo from "../components/Item/ItemInfo";
import ItemDrop from "../components/Item/ItemDrop";

const ItemDetail = () => {
  let { itemId } = useParams();
  let item = useSelector((state: stateType) => {
    return state.item;
  });
  let found = item.find((x: Item) => x.id === parseInt(itemId || "0"));
  if (!found) {
    return <div>아이템이 존재하지 않습니다.</div>;
  }
  return (
    <DetailStyle>
      <ItemInfo item={found} />
      <ItemDrop item={found} />
    </DetailStyle>
  );
};

export const DetailStyle = styled.div`
  padding: 20px;
`;

export default ItemDetail;
