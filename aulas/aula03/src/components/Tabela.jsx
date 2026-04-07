function Tabela(props) {
  return (
    <>
      {props.titulo && <h3>{props.titulo}</h3>}
      <table>
        <thead>
          <tr>
            {props.columas.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.dados.map((linha, i) => (
            <tr key={i}>
              {linha.map((coluna, j) => (
                <td key={j}>{coluna}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Tabela;
