import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome_Pessoa: "",
    dataNascimento_Pessoa: "",
    cpf_Pessoa: "",
    rendaFamiliarBruta_Pessoa: "",
    qtdDependentes_Pessoa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Cadastro realizado com sucesso:", data);
      } else {
        console.error("Erro no cadastro:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-[130vh]">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Cadastro</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="form-group">
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700"
              >
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome_Pessoa"
                value={formData.nome_Pessoa}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="dataNascimento"
                className="block text-sm font-medium text-gray-700"
              >
                Data de Nascimento:
              </label>
              <input
                type="date"
                id="dataNascimento"
                name="dataNascimento_Pessoa"
                value={formData.dataNascimento_Pessoa}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
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
                name="cpf_Pessoa"
                value={formData.cpf_Pessoa}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="rendaBruta"
                className="block text-sm font-medium text-gray-700"
              >
                Renda Bruta:
              </label>
              <input
                type="number"
                id="rendaBruta"
                name="rendaFamiliarBruta_Pessoa" 
                value={formData.rendaFamiliarBruta_Pessoa}
                onChange={handleChange}
                required
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
                name="qtdDependentes_Pessoa"
                value={formData.qtdDependentes_Pessoa}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#97ad7f] text-white py-2 px-4 rounded-md hover:bg-[#80a15c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro;
