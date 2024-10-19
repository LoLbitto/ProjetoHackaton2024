import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nomePessoa: "",
    dataNascimentoPessoa: "",
    cpf: "",
    rendaFamiliarBruta: "",
    qtdDependentes: "",
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

    const dadosFormatados = {
      ...formData,
      cpf: parseInt(formData.cpf, 10),
      rendaFamiliarBruta: parseFloat(formData.rendaFamiliarBruta),
      qtdDependentes: parseInt(formData.qtdDependentes, 10),
    };

    try {
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
              <label htmlFor="nomePessoa" className="block text-sm font-medium text-gray-700">
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
            </div>

            <div className="form-group">
              <label htmlFor="dataNascimentoPessoa" className="block text-sm font-medium text-gray-700">
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
            </div>

            <div className="form-group">
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
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
            </div>

            <div className="form-group">
              <label htmlFor="rendaFamiliarBruta" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="qtdDependentes" className="block text-sm font-medium text-gray-700">
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

            <button
              type="submit"
              className="w-full bg-[#80a15c] text-lg text-white py-2 px-4 rounded hover:bg-[#6c8a4c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Finalizar Cadastro
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro;
