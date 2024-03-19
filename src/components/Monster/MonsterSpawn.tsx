import styled from "styled-components";
import { Monster } from "../../model/monster.model";

const MonsterSpawn = ({ monster }: { monster: Monster }) => {
  if (monster?.location.length < 5) {
    return (
      <FewMonsterSpawnStyle>
        <h2>스폰장소</h2>
        <div className="location-container">
          {monster?.location.map((a, i) => {
            return (
              <p className="location" key={i}>
                {a}
              </p>
            );
          })}
        </div>
      </FewMonsterSpawnStyle>
    );
  }
  return (
    <MonsterSpawnStyle>
      <h2>스폰장소</h2>
      <div className="location-container">
        {monster?.location.map((a, i) => {
          return (
            <p className="location" key={i}>
              {a}
            </p>
          );
        })}
      </div>
    </MonsterSpawnStyle>
  );
};

const MonsterSpawnStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  gap: 10px;
  .location-container {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 20px;
    p {
      border: 1px solid gray;
      border-radius: 5px;
      margin: 10px 20px;
      padding: 10px 20px;
      width: 200px;
      background-color: black;
    }
  }
  @media (max-width: 768px) {
    .location-container {
      grid-template-columns: repeat(1, 1fr);
      .location {
        width: 80%;
      }
    }
  }
`;

const FewMonsterSpawnStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  gap: 10px;
  .location-container {
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    p {
      border: 1px solid gray;
      border-radius: 5px;
      margin: 10px 20px;
      padding: 10px 20px;
      width: 200px;
      background-color: black;
    }
  }
  @media (max-width: 768px) {
    .location-container {
      flex-direction: column;
    }
  }
`;

export default MonsterSpawn;
