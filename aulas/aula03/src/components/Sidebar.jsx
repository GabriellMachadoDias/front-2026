import logo from "../assets/learn.svg";
import Menu from "./Menu"

function Sidebar(props) {
  return (
    <aside>
      <header>
        <img src={logo} alt="logotipo" />
        <h1>Aluno Online</h1>
      </header>
      <Menu navegaPara={props.navegaPara}>
    </aside>
  );
}

export default Sidebar;
