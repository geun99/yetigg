import { useDispatch } from "react-redux";
import { lvSort, nameSort } from "../../store/monsterSlice";
import Button from "../Common/Button";
import { ButtonsStyle } from "../Item/ItemClassButtons";

const MonsterSortButtons = () => {
  const dispatch = useDispatch();
  const buttons = [nameSort, lvSort];
  const sorts = ["이름별 정렬", "레벨별 정렬"];
  return (
    <ButtonsStyle>
      <p>지역별 필터</p>
      <div className="btns">
        {buttons.map((btn, idx) => {
          return (
            <Button className="btn" key={idx} onClick={() => dispatch(btn())}>
              {sorts[idx]}
            </Button>
          );
        })}
      </div>
    </ButtonsStyle>
  );
};

export default MonsterSortButtons;
