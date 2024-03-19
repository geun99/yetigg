import { useNavigate } from "react-router";
import styled from "styled-components";
import { Item } from "../../model/item.model";

interface Props {
  tem: Item;
  idx: number;
}

const ItemCard = ({ tem, idx }: Props) => {
  const navigate = useNavigate();
  let details: string[] = [];

  if (tem.inform.includes("방어구") || tem.inform.includes("분류 무기")) {
    if (
      tem.inform.includes("분류 무기") &&
      tem.detail.includes("직업 마법사")
    ) {
      details = [tem.inform[0], tem.detail[0], tem.detail[3]];
    } else {
      details = [tem.inform[0], tem.detail[0], tem.detail[2]];
    }
  } else if (tem.inform.includes("장신구")) {
    details = [tem.inform[0], tem.detail[0]];
  } else {
    details = [tem.inform[1]];
  }
  return (
    <CardStyle
      key={idx}
      onClick={() => {
        navigate(`/item/${tem.id}`);
      }}
    >
      <img
        src={tem.img}
        alt={tem.name}
        className="item-card-img"
        loading="lazy"
      />
      <p>{tem.name}</p>
      {details.map((detail, idx) => (
        <p>{detail}</p>
      ))}
    </CardStyle>
  );
};

export const CardStyle = styled.div`
  gap: 12px;
  text-decoration: none;
  padding: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  box-shadow: 1px 1px 1px 0.1;
  border-radius: 5px;
  margin: 20px;
  background: #282c34;
  cursor: pointer;
  .inform {
    margin: 6px;
  }

  @media (max-width: 768px) {
    height: 200px;

    img {
      padding-top: 10px;
      max-height: 100px;
    }
  }
`;

export default ItemCard;
