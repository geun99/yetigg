import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  archerFilter,
  communalFilter,
  magicianFilter,
  rogueFilter,
  warriorFilter,
} from "../../store/itemSlice";
import Button from "../Common/Button";
import { useState } from "react";

const ItemClassButtons = () => {
  const dispatch = useDispatch();
  const [isJobActive, setIsJobActive] = useState(false);
  const buttons = [
    warriorFilter,
    archerFilter,
    rogueFilter,
    magicianFilter,
    communalFilter,
  ];
  const jobs = ["전사", "궁수", "도적", "마법사", "공용"];
  const toggleJobButtons = () => {
    setIsJobActive(!isJobActive);
  };
  return (
    <ButtonsStyle>
      <p onClick={toggleJobButtons} className="item-p">
        직업별 장비 분류
      </p>
      <div className={`btns job ${isJobActive ? "active" : ""}`}>
        {buttons.map((btn, idx) => {
          return (
            <Button className="btn" key={idx} onClick={() => dispatch(btn())}>
              {jobs[idx]}
            </Button>
          );
        })}
      </div>
    </ButtonsStyle>
  );
};

export const ButtonsStyle = styled.div`
  h2 {
    font-size: 1rem;
  }
  .item-p {
    margin-bottom: 10px;
  }
  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      width: 60%;
      font-size: 1.25rem;
      border: 1px solid gray;
      border-radius: 5px;
      margin: 10px 20px;
      padding: 10px 20px;
      background-color: black;
      cursor: pointer;
      &:hover {
        background-color: gray;
      }
    }
    .btns {
      display: none;
      flex-direction: column;
      gap: 5px;
    }
    .active {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
`;

export default ItemClassButtons;
