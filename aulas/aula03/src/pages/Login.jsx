import logo from "../assets/learn.svg";
import FomrLogin from "../components/FormLogin";

function Login(props) {
  return (
    <>
      <img src={logo} alt="Imagem da logo" className="w-25 h-25" />
      <h1 className="font-bold text-xg">Aluno Online</h1>.
      <FomrLogin navegaPara={props.navegaPara} />
    </>
  );
}

export default Login;
