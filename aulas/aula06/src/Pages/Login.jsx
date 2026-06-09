import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate;
  const { login } = useContext

  const entrar = async (dados) => {
    try { 
        await login(dados);
        navigate("/produtos");
        setErro("")
     } catch (error) {
        setErro(erro.message);
     }

  };
  return
    <>
      <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(entrar)}>
          <input type="email" placeholder="E-amil" {...register("email")} />
          <input type="password" placeholder="Senha" {...register("senha")} />
          <button type="submit">Entrar</button>
        </form>
      </>
    </>
}

export default Login;
