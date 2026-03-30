import './App.css';

function App() {
  // JSX = JS + XML
  return (
    <div>
      <header className=""></header>
      <label forLabel=""></label>
      <main>
        <img src="/duolingo.svg" width="434" alt="duolingo brabo" />
        <h1>Duolingo</h1>
        <label htmlFor="matricula">Matrícula</label>
        <input type="number" id="matricula" name="matricula" />
        <p id="matriculaErro"></p>
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" name="senha" />
        <p id="senhaErro"></p>
        <button type="submit">Entrar</button>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;