import MonsterInfo from "../components/Monster/MonsterInfo";
import MonsterSpawn from "../components/Monster/MonsterSpawn";
import MonsterDrop from "../components/Monster/MonsterDrop";
import { useSelector } from "react-redux";
import { stateType } from "./Monster";
import { useParams } from "react-router";
import { Monster } from "../model/monster.model";
import { DetailStyle } from "./ItemDetail";

const MonsterDetail = () => {
  let { monsterId } = useParams();
  let monster = useSelector((state: stateType) => {
    return state.monster;
  });
  let found = monster.find((x: Monster) => x.id === parseInt(monsterId || "0"));
  if (!found) {
    return <div>몬스터가 존재하지 않습니다.</div>;
  }
  return (
    <DetailStyle>
      <MonsterInfo monster={found} />
      <MonsterSpawn monster={found} />
      <MonsterDrop monster={found} />
    </DetailStyle>
  );
};

export default MonsterDetail;
