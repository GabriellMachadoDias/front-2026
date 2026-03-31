import logo from "import avatar from '../assets/logo.svg'";
import Menu from "./Menu";

function Sidebar() {
  return (
    <aside className="hidden md:black bg-grey-300">
      <header className="flex flex-row">
        <img src={logo} alt="imagem do logo" />
        <h1>Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;
