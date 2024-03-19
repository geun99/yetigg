import { Route, Routes } from "react-router";
import Main from "./pages/Main";
import Monster from "./pages/Monster";
import MonsterDetail from "./pages/MonsterDetail";
import ItemDetail from "./pages/ItemDetail";
import Item from "./pages/Item";
import SearchResult from "./pages/SearchResult";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/monster" element={<Monster />} />
        <Route path="/monster/:monsterId" element={<MonsterDetail />} />
        <Route path="/item" element={<Item />} />
        <Route path="/item/:itemId" element={<ItemDetail />} />
        <Route path="/search/:search" element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
