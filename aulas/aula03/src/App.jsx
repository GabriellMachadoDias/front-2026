import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'

function App() {
  return <div className='flex-col md:flex-row'>
    <aside className='hidden md:block bg-gray-300'>
      <header className='flex flex-row'>
        <img src="{logo}" alt="" />
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimento</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
    <main className=''>
      <header>
        <h1>Olá, Aluno!</h1>
        <img src="{avatar}" alt="imagem do avatar" />
      </header>
      <h2>Bem vindo ao portal do aluno</h2>
      <section>
        <article>
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Inscrição para projetos de extenção</li>
            <li>Eleição para repesentante de turma</li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Calendário Academico</h3>
          <ul>
            <li>23/02 - Início do semestre letivo</li>
            <li></li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Minhas diciplinas</h3>
          <ul>
            <li>Construção frontend</li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </section>
    </main>
  </div>

}

export default App;