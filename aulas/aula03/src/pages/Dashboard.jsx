import Card from "../components/Card";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const avisos = [
    "ELeição para representante de turma",
    "inscrição para o projeto de extenção",
  ];

  const datas = ["27/04 - Avaliação A1"];

  const diciplinas = [
    "Construção Frontend", 
    "Devops", 
    "Business Intelligence"
];

  return (
    <>
      <Sidebar />
      <Main titulo="Olá, Aluno" subtitulo="Bem vindo ao portal do aluno">
        <Card titulo="Mural de Avisos" itens={avisos} />
        <Card titulo="Caçendário Acadêmico" itens={datas}/>
        <Card titulo="Minhas Diciplinas" itens={diciplinas}/>
      </Main>
    </>
  );
}

export default Dashboard;
