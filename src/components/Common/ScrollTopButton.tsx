import styled from "styled-components";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollTopButton = () => {
  return (
    <ScrollTopButtonStyle>
      <FaCircleArrowUp
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      />
    </ScrollTopButtonStyle>
  );
};

const ScrollTopButtonStyle = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  cursor: pointer;
  border: none;
  outline: none;
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 2.5rem;
  display: flex;
`;

export default ScrollTopButton;
