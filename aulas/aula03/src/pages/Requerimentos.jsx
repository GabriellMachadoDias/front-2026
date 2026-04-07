import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Requerimentos() {
  return (
    <>
      <Sidebar />
      <Main titulo="Meus Requerimentos" subtitulo="Faça SOlicitação Online para a Secretaria">
        <Tabela />
      </Main>
    </>
  );
}

export default Requerimentos;
