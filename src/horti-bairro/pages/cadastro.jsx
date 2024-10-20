import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nomePessoa: "",
    dataNascimentoPessoa: "",
    cpf: "",
    rendaFamiliarBruta: "",
    qtdDependentes: "",
    senha: "",
    confirmarSenha: "",
  });

  const [erros, setErros] = useState({});
  const [etapa, setEtapa] = useState(1);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "cpf" || name === "senha" || name === "confirmarSenha") {
      setErros((prevErros) => ({
        ...prevErros,
        [name]: undefined,
      }));
    }
  };

  const validarCPF = (cpf) => {
    const cpfRegex = /^\d{11}$/;
    return cpfRegex.test(cpf.replace(/\D/g, ""));
  };

  const validarSenha = (senha) => {
    const senhaRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return senhaRegex.test(senha);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novosErros = {};

    if (!validarCPF(formData.cpf)) {
      novosErros.cpf = "CPF inválido.";
    }
    if (!validarSenha(formData.senha)) {
      novosErros.senha =
        "A senha deve ter pelo menos 8 caracteres, incluindo letra maiúscula, minúscula, número e caractere especial.";
    }
    if (formData.senha !== formData.confirmarSenha) {
      novosErros.confirmarSenha = "As senhas não coincidem.";
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      try {
        const dadosFormatados = {
          nomePessoa: formData.nomePessoa,
          dataNascimentoPessoa: formData.dataNascimentoPessoa,
          cpf: parseInt(formData.cpf, 10),
          rendaFamiliarBruta: parseFloat(formData.rendaFamiliarBruta),
          qtdDependentes: parseInt(formData.qtdDependentes, 10),
          senha: formData.senha,
        };

        const response = await fetch("/api/cadastro", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dadosFormatados),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Cadastro realizado com sucesso:", data);

          setMensagemSucesso("Cadastro realizado com sucesso!");
          setIsLoading(true);

          setTimeout(() => {
            localStorage.setItem("usuario", JSON.stringify(dadosFormatados));
            router.push("/");
          }, 3000);
        } else {
          console.error("Erro no cadastro:", response.statusText);
        }
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
      }
    }
  };

  const handleNextStep = () => {
    const novosErros = {};

    if (!formData.nomePessoa) {
      novosErros.nomePessoa = "Nome é obrigatório.";
    }
    if (!validarCPF(formData.cpf)) {
      novosErros.cpf = "CPF inválido.";
    }
    if (!formData.dataNascimentoPessoa) {
      novosErros.dataNascimentoPessoa = "Data de nascimento é obrigatória.";
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setEtapa(2);
    }
  };

  const handlePreviousStep = () => {
    setEtapa(1);
  };

  return (
    <div className="flex flex-col min-h-[130vh]">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
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
          <form
            className="space-y-4"
            onSubmit={etapa === 2 ? handleSubmit : (e) => e.preventDefault()}
          >
            {etapa === 1 && (
              <>
                <div className="flex items-center justify-center mb-6">
                  <h1 className="text-4xl font-bold">Cadastro</h1>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="nomePessoa"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome:
                  </label>
                  <input
                    type="text"
                    id="nomePessoa"
                    name="nomePessoa"
                    value={formData.nomePessoa}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {erros.nomePessoa && (
                    <p className="text-red-500 text-sm mt-1">
                      {erros.nomePessoa}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="dataNascimentoPessoa"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Data de Nascimento:
                  </label>
                  <input
                    type="date"
                    id="dataNascimentoPessoa"
                    name="dataNascimentoPessoa"
                    value={formData.dataNascimentoPessoa}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {erros.dataNascimentoPessoa && (
                    <p className="text-red-500 text-sm mt-1">
                      {erros.dataNascimentoPessoa}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="cpf"
                    className="block text-sm font-medium text-gray-700"
                  >
                    CPF:
                  </label>
                  <input
                    type="text"
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

                <button
                  type="button"
                  onClick={handleNextStep}
                  className="w-full bg-[#80a15c] text-lg text-white py-2 px-4 rounded hover:bg-[#6c8a4c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Próxima Etapa
                </button>
              </>
            )}

            {etapa === 2 && (
              <>
                <div className="flex items-center mb-6 justify-between">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="text-lg text-black mr-0"
                  >
                    <ArrowLeftIcon className="h-6 w-6" />
                  </button>
                  <div className="flex-1 text-center ml-0">
                    <h1 className="text-4xl font-bold">Cadastro</h1>
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="rendaFamiliarBruta"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Renda Familiar Bruta:
                  </label>
                  <input
                    type="number"
                    id="rendaFamiliarBruta"
                    name="rendaFamiliarBruta"
                    value={formData.rendaFamiliarBruta}
                    onChange={handleChange}
                    required
                    step="0.01"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="qtdDependentes"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantidade de Dependentes:
                  </label>
                  <input
                    type="number"
                    id="qtdDependentes"
                    name="qtdDependentes"
                    value={formData.qtdDependentes}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="senha"
                    className="block text-sm font-medium text-gray-700"
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

                <div className="form-group">
                  <label
                    htmlFor="confirmarSenha"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirmar Senha:
                  </label>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  {erros.confirmarSenha && (
                    <p className="text-red-500 text-sm mt-1">
                      {erros.confirmarSenha}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#80a15c] text-lg text-white py-2 px-4 rounded hover:bg-[#6c8a4c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Finalizar Cadastro
                </button>
              </>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro;
