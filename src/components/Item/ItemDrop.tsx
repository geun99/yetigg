import styled from "styled-components";
import { Item } from "../../model/item.model";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateType } from "../../pages/Monster";

const ItemDrop = ({ item }: { item: Item }) => {
  let monster = useSelector((state: stateType) => {
    return state.monster;
  });
  if (item.drop.length < 5) {
    return (
      <FewDropStyle>
        <h2>드랍</h2>
        <div className="detail-drop">
          {item.drop.map((itemName, index) => {
            let monsterFound = monster.find((item) => item.name === itemName);

            if (monsterFound) {
              return (
                <Link
                  to={`/monster/${monsterFound.id}`}
                  className="link"
                  key={index}
                >
                  <div className="box">
                    <img src={monsterFound.img} alt={itemName} />
                    <p>{itemName}</p>
                  </div>
                </Link>
              );
            } else {
              return (
                <div key={index}>
                  <p>{itemName}</p>
                </div>
              );
            }
          })}
        </div>
      </FewDropStyle>
    );
  }
  return (
    <DropStyle>
      <h2>드랍</h2>
      <div className="detail-drop">
        {item.drop.map((itemName, index) => {
          let monsterFound = monster.find((item) => item.name === itemName);

          if (monsterFound) {
            return (
              <Link
                to={`/monster/${monsterFound.id}`}
                className="link"
                key={index}
              >
                <div className="box">
                  <img src={monsterFound.img} alt={itemName} />
                  <p>{itemName}</p>
                </div>
              </Link>
            );
          } else {
            return (
              <div key={index}>
                <p>{itemName}</p>
              </div>
            );
          }
        })}
      </div>
    </DropStyle>
  );
};

export const DropStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  gap: 20px;
  .detail-drop {
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 40px;
    a {
      text-decoration: none;
      color: white;
    }

    .box {
      background: black;
      margin: 10px;
      border-radius: 5px;
      border: 1px solid gray;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 5px;
      width: 150px;
      height: 150px;

      img {
        padding-bottom: 10px;
      }
    }
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    .detail-drop {
      grid-template-columns: repeat(2, 1fr);
      gap: 5px;
      .box {
        width: 100px;
        height: 100px;
        position: relative;
        img {
          max-width: 50px;
          padding-bottom: 0px;
        }
      }
    }
  }
`;

export const FewDropStyle = styled.div`
.detail-drop {
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
  .box {
    background: black;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;

    img {
      padding-bottom: 10px;
    }
  }
`;

export default ItemDrop;
