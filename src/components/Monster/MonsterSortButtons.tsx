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
      <h2>정렬</h2>
      <div className="btns active">
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
