import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Notas() {
  const colunas = ["Diciplina", "A1", "A2", "A3", "Menção"];

  const notas = [
    [
      ["BI  e Data Warehousing", "", "", "", "SR"],
      ["Construção de Frontend", "", "", "", "SR"],
      ["Devops", "", "", "", "SR"],
    ],
    [
      ["Estrutura de Dados", "5.5", "5.5", "", "MM"],
      ["Construção de Backend", "5.5", "5.5", "", "MM"],
      ["Gerenciamento de Projetos", "8.0", "9.0", "", "MS"],
    ],
    [
      ["Engenharia de Software", "5.5", "5.5", "", "MM"],
      ["Dispositivos Moveis", "5.5", "6.0", "", "MM"],
      ["Estatística", "8.0", "9.0", "", "MS"],
    ],
  ];

  return (
    <>
      <Sidebar />
      <Main titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
        <Tabela titulo="2026.1" colunas={colunas} dados={notas[0]} />
        <Tabela titulo="2025.2" colunas={colunas} dados={notas[1]} />
        <Tabela titulo="2025.1" colunas={colunas} dados={notas[2]} />
      </Main>
    </>
  );
}

export default Notas;
