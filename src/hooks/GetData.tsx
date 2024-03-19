import { DataSnapshot, get, getDatabase, ref } from "firebase/database";
import { useDispatch } from "react-redux";
import app from "../firebaseConfig";
import { initItem } from "../store/itemSlice";
import { useEffect } from "react";
import { initMonster } from "../store/monsterSlice";
import { Monster } from "../model/monster.model";
import { Item } from "../model/item.model";

const GetData = () => {
  const dispatch = useDispatch();

  const fetchItem = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "item");
    const snapshot: DataSnapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data: Item[] = snapshot.val();
      dispatch(initItem(data));
    } else {
      return null;
    }
  };
  const fetchMonster = async () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "monster");
    const snapshot: DataSnapshot = await get(dbRef);
    if (snapshot.exists()) {
      const data: Monster[] = snapshot.val();
      dispatch(initMonster(data));
    } else {
      return null;
    }
  };
  useEffect(() => {
    fetchItem();
    fetchMonster();
  }, []);
  return null;
};

export default GetData;
