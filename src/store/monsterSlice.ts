import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Monster } from "../model/monster.model";

let originMonster: Monster[] = [];

let monsters = createSlice({
  name: "monster",
  initialState: [] as Monster[],
  reducers: {
    initMonster(state, action: PayloadAction<Monster[]>) {
      originMonster = [...action.payload];
      return action.payload;
    },
    lvSort(state) {
      const copy = [...originMonster];
      copy.sort((a, b) => a.level - b.level);
      return copy;
    },
    nameSort(state) {
      const copy = [...originMonster];
      copy.sort((a, b) => a.name.localeCompare(b.name));
      return copy;
    },
    victoriaFilter(state) {
      const copy = [...originMonster];
      let arr: Monster[] = [];
      copy.forEach((a, i) => {
        if (a.continent === "빅토리아 아일랜드" || a.continent === "둘 다") {
          arr.push(a);
        }
      });
      return arr;
    },

    elnathFilter(state) {
      const copy = [...originMonster];
      let arr: Monster[] = [];
      copy.forEach((a, i) => {
        if (a.continent === "엘나스 산맥" || a.continent === "둘 다") {
          arr.push(a);
        }
      });
      return arr;
    },
  },
});
export let { initMonster, lvSort, nameSort, victoriaFilter, elnathFilter } =
  monsters.actions;

export default monsters;
