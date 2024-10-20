import { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { useRouter } from "next/router";

const Perfil = () => {
  const [usuario, setUsuario] = useState(null);
  const [isEditando, setIsEditando] = useState(false);
  const [isCreditos, setIsCreditos] = useState(false);
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [rendaFamiliarBruta, setRendaFamiliarBruta] = useState(0);
  const [qtdDependentes, setQtdDependentes] = useState(0);
  const [mensagemSucesso, setMensagemSucesso] = useState("");
  const router = useRouter();

  useEffect(() => {
    const usuarioLocal = localStorage.getItem("usuario");
    if (usuarioLocal) {
      const usuarioData = JSON.parse(usuarioLocal);
      setUsuario(usuarioData);
      setNome(usuarioData.nomePessoa);
      setDataNascimento(usuarioData.dataNascimentoPessoa);
      setCpf(usuarioData.cpf);
      setRendaFamiliarBruta(usuarioData.rendaFamiliarBruta);
      setQtdDependentes(usuarioData.qtdDependentes);
    } else {
      router.push("/");
    }
  }, [router]);

  const handleEditar = () => {
    setIsEditando(!isEditando);
  };

  const handleCreditos = () => {
    setIsCreditos(true);
  };

  const handleVoltar = () => {
    setIsCreditos(false);
  };

  const handleSalvar = async () => {
    const dadosAtualizados = {
      ...usuario,
      nomePessoa: nome,
      dataNascimentoPessoa: dataNascimento,
      cpf: cpf,
      rendaFamiliarBruta: rendaFamiliarBruta,
      qtdDependentes: qtdDependentes,
    };

    try {
      const response = await fetch("/api/pessoa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosAtualizados),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Usuário editado com sucesso:", data);

        setMensagemSucesso("Usuário editado com sucesso!");

        setTimeout(() => {
          localStorage.setItem("usuario", JSON.stringify(dadosAtualizados));
          setMensagemSucesso("");

          router.reload();
        }, 2000);
      } else {
        console.error("Erro na edição:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }

    localStorage.setItem("usuario", JSON.stringify(dadosAtualizados));
    setUsuario(dadosAtualizados);
    setIsEditando(false);
  };

  if (!usuario) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-[130vh]">
      <Header />
      <div className="flex justify-center items-center flex-grow">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-4xl font-bold mb-6 text-center">Perfil</h1>
          {mensagemSucesso && (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
              role="alert"
            >
              <strong className="font-bold">Sucesso! </strong>
              <span className="block sm:inline">{mensagemSucesso}</span>
            </div>
          )}
          <div className="space-y-4">
            {isCreditos ? (
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Informações sobre os Créditos
                </h2>
                <p>Valor mensal: {usuario.creditos}</p>
                <p>placeholder</p>
                <p>placeholder</p>
                <button
                  onClick={handleVoltar}
                  className="mt-4 w-full bg-[#f56565] hover:bg-[#e53e3e] text-white py-2 rounded"
                >
                  Voltar
                </button>
              </div>
            ) : (
              <div>
                <div className="form-group">
                  <label className="block text-lg font-medium text-gray-700">
                    Nome:
                  </label>
                  {isEditando ? (
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="mt-1 p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    <p className="mt-1 text-lg">{usuario.nomePessoa}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="block text-lg font-medium text-gray-700">
                    Data de Nascimento:
                  </label>
                  {isEditando ? (
                    <input
                      type="date"
                      value={dataNascimento}
                      onChange={(e) => setDataNascimento(e.target.value)}
                      className="mt-1 p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    <p className="mt-1 text-lg">
                      {usuario.dataNascimentoPessoa}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label className="block text-lg font-medium text-gray-700">
                    CPF:
                  </label>
                  {isEditando ? (
                    <input
                      type="text"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className="mt-1 p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    <p className="mt-1 text-lg">{usuario.cpf}</p>
                  )}
                </div>
                <div className="form-group">
                  <label className="block text-lg font-medium text-gray-700">
                    Renda Familiar Bruta:
                  </label>
                  {isEditando ? (
                    <input
                      type="number"
                      value={rendaFamiliarBruta}
                      onChange={(e) =>
                        setRendaFamiliarBruta(Number(e.target.value))
                      }
                      className="mt-1 p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    <p className="mt-1 text-lg">
                      {usuario.rendaFamiliarBruta.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label className="block text-lg font-medium text-gray-700">
                    Quantidade de Dependentes:
                  </label>
                  {isEditando ? (
                    <input
                      type="number"
                      value={qtdDependentes}
                      onChange={(e) =>
                        setQtdDependentes(Number(e.target.value))
                      }
                      className="mt-1 p-2 border border-gray-300 rounded"
                    />
                  ) : (
                    <p className="mt-1 text-lg">{usuario.qtdDependentes}</p>
                  )}
                </div>
                <div className="form-group">
                  <button
                    onClick={handleCreditos}
                    className="mt-4 text-sm w-full bg-[#e3e3e3] hover:bg-[#d1d1d1] p-2 text-gray-700 rounded text-left"
                  >
                    <label className="block text-lg font-medium text-gray-700">
                      Créditos
                    </label>

                    <p className="mt-1 text-lg">{usuario.creditos}</p>
                  </button>
                </div>
                <button
                  onClick={isEditando ? handleSalvar : handleEditar}
                  className="mt-4 w-full bg-[#80a15c] hover:bg-[#6c8a4c] text-white py-2 rounded"
                >
                  {isEditando ? "Salvar" : "Editar"}
                </button>
              </div>
            )}
          </div>
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

export default Perfil;
