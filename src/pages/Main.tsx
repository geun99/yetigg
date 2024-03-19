import styled from "styled-components";
import SearchBox from "../components/Common/SearchBox";

const Main = () => {
  return (
    <MainStyle>
      <h1>YETI.GG</h1>
      <img src="/yeti.png" alt="yeti" className="yeti" />
      <SearchBox />
    </MainStyle>
  );
};

const MainStyle = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  heigth: 100vh;
  position: relative;
  h1 {
    color: white;
    font-size: 6rem;
    padding-top: 20px;
  }
  img {
    padding-top: 40px;
    width: 300px;
    heigth: auto;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 4rem;
    }

    img {
      padding-top: 10px;
      width: 250px;
      heigth: auto;
    }
  }
`;

export default Main;
