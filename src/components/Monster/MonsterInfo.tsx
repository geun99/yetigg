import styled from "styled-components";
import { Monster } from "../../model/monster.model";
import { formatNumber } from "../../util/fotmat";

const MonsterInfo = ({ monster }: { monster: Monster }) => {
  return (
    <InfoStyle>
      <img
        src={monster?.move}
        alt={monster?.name}
        className="detail-item-img"
      />
      <h1>{monster.name}</h1>
      <div className="feature">
        <div className="left">
          <h2>능력치</h2>
          <div className="inform">
            <p className="detail-info level">
              Level {formatNumber(monster.level)}
            </p>
            <p className="detail-info exp">Exp {formatNumber(monster.exp)}</p>
            <p className="detail-info hp">HP {formatNumber(monster.hp)}</p>
            <p className="detail-info mp">MP {formatNumber(monster.mp)}</p>
          </div>
        </div>

        <div className="right">
          <h2>상세 정보</h2>
          <div className="inform">
            {monster.feature.map((a) => {
              return <p>{a}</p>;
            })}
          </div>
        </div>
      </div>
    </InfoStyle>
  );
};

export const InfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    min-width: 100px;
  }
  .feature {
    display: flex;
    margin-bottom: 20px;
    width: 1200px;
  }

  .left,
  .right {
    flex: 1;
    justify-content: start;
    width: 50%;
    h2 {
      margin: 20px;
    }
  }
  .item-info {
    align-items: center;
    display: flex;
    flex-direction: space-between;
    justify-content: center;
  }

  .inform {
    p {
      background-color: #000;
      border: 1px px solid gray;
      border-radius: 5px;
      font-size: 16px;
      margin: 2px auto 20px;
      padding: 10px 20px;
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      heigth: 60px;
      border: 1px solid gray;
    }
  }
  @media (max-width: 768px) {
    .feature {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin-bottom: 20px;
    }
    .left,
    .right {
      flex: 1;
      width: 100%;
      h2 {
        margin: 10px;
      }
    }
    .inform {
      p {
        width: 100%;
      }
    }
  }
`;

export default MonsterInfo;
