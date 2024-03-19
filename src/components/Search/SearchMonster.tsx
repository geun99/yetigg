import styled from "styled-components";
import { Monster } from "../../model/monster.model";
import MonsterCard from "../Monster/MonsterCard";

const SearchMonster = ({ searchMonster }: { searchMonster: Monster[] }) => {
  if (searchMonster.length === 0) {
    return <div>검색한 아이템이 존재하지 않습니다.</div>;
  }
  return (
    <SearchMonsterStyle>
      <h1>검색 몬스터 목록({searchMonster.length}종)</h1>
      <div className="main">
        {searchMonster.map((monster, idx) => {
          return <MonsterCard key={idx} idx={idx} mob={monster} />;
        })}
      </div>
    </SearchMonsterStyle>
  );
};

const SearchMonsterStyle = styled.div``;

export default SearchMonster;
