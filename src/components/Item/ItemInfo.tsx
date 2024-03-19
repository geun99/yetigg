import { Item } from "../../model/item.model";
import { InfoStyle } from "../Monster/MonsterInfo";

const ItemInfo = ({ item }: { item: Item }) => {
  return (
    <InfoStyle>
      <img src={item?.img} alt={item?.name} className="detail-item-img" />
      <h1>{item?.name}</h1>
      <div className="feature">
        <div className="left">
          <h2>기본 정보</h2>
          <div className="inform">
            {item?.inform.map((a, i) => {
              return <p key={i}>{a}</p>;
            })}
          </div>
        </div>
        <div className="right">
          <h2>세부 정보</h2>
          <div className="inform">
            {item?.detail.map((a, i) => {
              return <p key={i}>{a}</p>;
            })}
          </div>
        </div>
      </div>
    </InfoStyle>
  );
};

export default ItemInfo;
