import { Monster } from "../../model/monster.model";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateType } from "../../pages/Monster";
import { DropStyle, FewDropStyle } from "../Item/ItemDrop";

const MonsterDrop = ({ monster }: { monster: Monster }) => {
  let item = useSelector((state: stateType) => {
    return state.item;
  });

  if (monster.drop[0] === "없음") {
    return (
      <div className="empty">
        <p>해당 몬스터는 아이템을 드랍하지 않습니다.</p>
      </div>
    );
  }
  if (monster.drop.length < 5) {
    return (
      <FewDropStyle>
        <h2>드랍</h2>
        <div className="drop">
          <div className="detail-drop">
            {monster?.drop.map((itemName, index) => {
              let itemFound = item.find((item) => item.name === itemName);

              if (itemFound) {
                return (
                  <Link
                    to={`/item/${itemFound.id}`}
                    className="link"
                    key={index}
                  >
                    <div className="box">
                      <img src={itemFound.img} alt={itemName} />
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
        </div>
      </FewDropStyle>
    );
  }
  return (
    <DropStyle>
      <h2>드랍</h2>
      <div className="drop">
        <div className="detail-drop">
          {monster?.drop.map((itemName, index) => {
            let itemFound = item.find((item) => item.name === itemName);
            if (itemFound) {
              return (
                <Link to={`/item/${itemFound.id}`} className="link" key={index}>
                  <div className="box">
                    <img src={itemFound.img} alt={itemName} />
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
      </div>
    </DropStyle>
  );
};

export default MonsterDrop;
