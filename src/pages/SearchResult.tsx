import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { stateType } from "./Monster";
import SearchMonster from "../components/Search/SearchMonster";
import SearchItem from "../components/Search/SearchItem";
import { ListStyle } from "./Item";
import ScrollTopButton from "../components/Common/ScrollTopButton";

const SearchResult = () => {
  const { search } = useParams();
  let item = useSelector((state: stateType) => {
    return state;
  });
  const searchItem = item.item.filter((item) =>
    item.name.includes(search || "")
  );
  const searchMonster = item.monster.filter((monster) =>
    monster.name.includes(search || "")
  );
  if (searchItem.length === 0 && searchMonster.length === 0) {
    return (
      <div className="bg-container">
        <div className="searchResult">
          <h1>검색 결과가 없습니다.</h1>
        </div>
      </div>
    );
  }
  return (
    <ListStyle>
      <SearchMonster searchMonster={searchMonster} />
      <SearchItem searchItem={searchItem} />
      <ScrollTopButton />
    </ListStyle>
  );
};

export default SearchResult;
