import styled from "styled-components";
import { Monster } from "../../model/monster.model";
import { useNavigate } from "react-router-dom";
import { formatNumber } from "../../util/fotmat";
import { CardStyle } from "../Item/ItemCard";

interface Props {
  idx: number;
  mob: Monster;
}

const MonsterCard = ({ idx, mob }: Props) => {
  const navigate = useNavigate();
  return (
    <CardStyle
      className="card"
      key={idx}
      onClick={() => {
        navigate(`/monster/${mob.id}`);
      }}
    >
      <MonsterCardStyle>
        <img src={mob.img} alt={mob.name} />
        <h2>{mob.name}</h2>
        <div className="inform">
          <p>
            <span className="level">LEVEL</span> {formatNumber(mob.level)}
          </p>
          <p>
            <span className="hp">HP</span> {formatNumber(mob.hp)}
          </p>
          <p>
            <span className="exp">EXP</span> {formatNumber(mob.exp)}
          </p>
        </div>
      </MonsterCardStyle>
    </CardStyle>
  );
};

const MonsterCardStyle = styled.div`
  .level {
    color: yellow;
  }
  .hp {
    color: red;
  }
  .exp {
    color: lightgreen;
  }
`;

export default MonsterCard;
