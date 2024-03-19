import styled from "styled-components";
import { Item } from "../../model/item.model";
import ItemCard from "../Item/ItemCard";

const SearchItem = ({ searchItem }: { searchItem: Item[] }) => {
  if (searchItem.length === 0) {
    return <div>검색한 아이템이 존재하지 않습니다.</div>;
  }
  return (
    <SearchItemStyle>
      <h1>검색 아이템 목록({searchItem.length}종)</h1>
      <div className="main">
        {searchItem.map((item, idx) => {
          return <ItemCard tem={item} idx={idx} key={idx} />;
        })}
      </div>
    </SearchItemStyle>
  );
};

const SearchItemStyle = styled.div``;

export default SearchItem;
