import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useRouter } from "next/router";

const Login = () => {
  const [formData, setFormData] = useState({
    cpf: "",
    senha: "",
  });

  const [erros, setErros] = useState({});
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErros((prevErros) => ({
      ...prevErros,
      [name]: undefined,
    }));
  };

  const validarCPF = (cpf) => /^\d{11}$/.test(cpf.replace(/\D/g, ""));
  const validarSenha = (senha) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      senha
    );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novosErros = {};

    if (!validarCPF(formData.cpf)) {
      novosErros.cpf = "CPF inválido.";
    }

    if (!validarSenha(formData.senha)) {
      novosErros.senha = "Senha inválida.";
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setIsLoading(true);
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Login realizado com sucesso:", data);

          setMensagemSucesso("Login realizado com sucesso!");
          setIsLoading(true);

          setTimeout(() => {
            localStorage.setItem("usuario", JSON.stringify(data));
            router.push("/");
          }, 3000);
        } else {
          const errorData = await response.json();
          console.error("Erro no login:", errorData);
          setErros({ ...erros, geral: "Erro ao realizar login." });
        }
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
        setErros({ ...erros, geral: "Erro ao conectar ao servidor." });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-[130vh]">
      <Header />
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-4xl font-bold">Login</h1>
      </div>
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Login</h1>
          {mensagemSucesso && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <strong className="font-bold">Sucesso! </strong>
              <span className="block sm:inline">{mensagemSucesso}</span>
            </div>
          )}
          {isLoading && (
            <div className="flex justify-center items-center mb-4">
              <div className="loader"></div>
            </div>
          )}
          {erros.geral && (
            <p className="text-red-500 text-sm mt-1">{erros.geral}</p>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-group">
              <label
                htmlFor="cpf"
                className="block text-lg font-medium text-gray-700"
              >
                CPF:
              </label>
              <input
                type="number"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {erros.cpf && (
                <p className="text-red-500 text-sm mt-1">{erros.cpf}</p>
              )}
            </div>

            <div className="form-group">
              <label
                htmlFor="senha"
                className="block text-lg font-medium text-gray-700"
              >
                Senha:
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {erros.senha && (
                <p className="text-red-500 text-sm mt-1">{erros.senha}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-[#80a15c] text-lg text-white py-2 px-4 rounded hover:bg-[#6c8a4c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .loader {
          border: 5px solid #f3f3f3;
          border-top: 5px solid #3498db;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
