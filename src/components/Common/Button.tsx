import styled from "styled-components";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button = ({ children, ...props }: Props) => {
  return (
    <ButtonStyle>
      <button className="btn" onClick={props.onClick}>
        {children}
      </button>
    </ButtonStyle>
  );
};

const ButtonStyle = styled.div`
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px 20px;
    margin-right: 5px;
    border-radius: 5px;
    background: #282c34;
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default Button;
