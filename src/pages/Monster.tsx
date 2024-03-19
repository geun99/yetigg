import { useSelector } from "react-redux";
import MonsterSortButtons from "../components/Monster/MonsterSortButtons";
import MonsterLocationButtons from "../components/Monster/MonsterLocationButtons";
import MonsterCard from "../components/Monster/MonsterCard";
import { Monster as IMonster } from "../model/monster.model";
import { Item } from "../model/item.model";
import { ListStyle } from "./Item";
import ScrollTopButton from "../components/Common/ScrollTopButton";

export interface stateType {
  monster: IMonster[];
  item: Item[];
}
const Monster = () => {
  let monster = useSelector((state: stateType) => {
    return state.monster;
  });
  return (
    <ListStyle>
      <div className="container">
        <h1>몬스터 목록({monster.length}종)</h1>
        <div className="btn-container">
          <MonsterSortButtons />
          <MonsterLocationButtons />
        </div>
        <div className="main">
          {monster.map((a: IMonster, idx: number) => {
            return <MonsterCard key={idx} idx={idx} mob={a} />;
          })}
        </div>
      </div>
      <ScrollTopButton />
    </ListStyle>
  );
};

export default Monster;
