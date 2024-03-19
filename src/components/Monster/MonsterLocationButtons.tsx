import { useDispatch } from "react-redux";
import { elnathFilter, victoriaFilter } from "../../store/monsterSlice";
import Button from "../Common/Button";
import { ButtonsStyle } from "../Item/ItemClassButtons";

const MonsterLocationButtons = () => {
  const dispatch = useDispatch();
  const buttons = [elnathFilter, victoriaFilter];
  const continents = ["엘나스 산맥", "빅토리아 아일랜드"];
  return (
    <ButtonsStyle>
      <p>지역별 필터</p>
      <div className="btns">
        {buttons.map((btn, idx) => {
          return (
            <Button className="btn" key={idx} onClick={() => dispatch(btn())}>
              {continents[idx]}
            </Button>
          );
        })}
      </div>
    </ButtonsStyle>
  );
};

export default MonsterLocationButtons;
