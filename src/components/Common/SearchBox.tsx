import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const SearchBox = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <SearchBoxStyle>
      <form className="searchBox" onSubmit={handleSearch}>
        <input
          type="text"
          className="search"
          placeholder="몬스터나 아이템 이름을 입력하세요"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="searchButton">
          🔍
        </button>
      </form>
    </SearchBoxStyle>
  );
};

const SearchBoxStyle = styled.div`
  .searchBox {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    width: 500px;
    height: 50px;
    margin: 100px;
    border-radius: 5px;
    text-decoration: none;
    text-align: center;
  }
  .search {
    width: 80%;
    height: 100%;
    padding-left: 10px;
    font-size: 24px;
    border: none;
    outline: none;
    text-align: center;
    color: #282c34;
  }
  .search:focus::placeholder {
    color: transparent;
  }
  .searchButton {
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: #fff;
  }
  @media (max-width: 768px) {
    .searchBox {
      width: 90%;
      height: 50px;
      margin: 50px;
      font-size: 1.5rem;
      position: relative;
      right: 30px;
    }
    .search {
      width: 80%;
      height: 100%;
      padding-left: 10px;
      font-size: 1rem;
    }
    .searchButton {
      font-size: 1.5rem;
    }
  }
`;

export default SearchBox;
