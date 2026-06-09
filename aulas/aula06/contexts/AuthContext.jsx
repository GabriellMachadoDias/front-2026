import { createContext, useContext, useState } from "react";
import { entrar } from "../services/authService";
// cria o contexto
const AuthContext = createContext();

// cria o provedor
function AuthProvider({ children }) {
  const [logado, setLogado] = useState(true);
  const [usuario, setUsuario] = useState({});

  const login = async (dados) => {
    const { token, mensagem } = await entrar(dados);
    if (token) {
      setUsuario({ email: dados.email, token });
      setLogado(true);
      return;
    }
    throw new Error(mensagem);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ logado, usuario, login, logout }}>
      {/* value =  estado compartilhado */}
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };
