import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/solid";
import { HomeIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioStorage = localStorage.getItem("usuario");
    if (usuarioStorage) {
      setUsuario(JSON.parse(usuarioStorage));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
    router.push("/");
  };

  return (
    <header className="bg-[#97ad7f] fixed top-0 left-0 w-full min-h-[10vh] flex items-center px-5 py-2 z-10">
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-2xl font-bold w-[30vw] hidden lg:block">
        HORTI-BAIRRO
      </h1>

      <nav className="flex justify-between w-full mr-0">
        <ul className="flex flex-wrap items-center ml-auto">
          {!usuario && (
            <li>
              <div className="flex space-x-4">
                {router.pathname !== "/login" && (
                  <Link href="/login">
                    <span className="flex items-center text-[#336938] text-lg font-bold hover:bg-[#80a15c] duration-200 p-2 rounded-lg">
                      LOGIN <UserCircleIcon className="h-6 w-6 ml-2" />
                    </span>
                  </Link>
                )}
                {router.pathname !== "/cadastro" && (
                  <Link href="/cadastro">
                    <span className="flex items-center text-[#336938] text-lg font-bold hover:bg-[#80a15c] duration-200 p-2 rounded-lg">
                      CADASTRO <UserCircleIcon className="h-6 w-6 ml-2" />
                    </span>
                  </Link>
                )}
              </div>
            </li>
          )}
          {usuario && (
            <div className="relative">
              <button
                onClick={() => setIsOpenUser(!isOpenUser)}
                className="flex items-center text-[#336938] text-lg font-bold p-2 rounded-lg hover:bg-[#80a15c]"
              >
                {usuario.nomePessoa} <UserCircleIcon className="h-6 w-6 ml-2" />
              </button>
              {isOpenUser && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                  <ul className="flex flex-col p-4 space-y-2">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-left w-full text-gray-800 hover:bg-[#cc2931] hover:text-white p-2 rounded duration-100"
                      >
                        Sair
                      </button>
                    </li>
                    <li>
                      <Link
                        href="/perfil"
                        className="block text-gray-800 hover:bg-[#e0ddd7] p-2 rounded duration-200"
                      >
                        Perfil
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {router.pathname !== "/" && (
            <li>
              <Link href="/">
                <span className="flex items-center text-[#336938] text-lg font-bold hover:bg-[#80a15c] duration-200 p-2 rounded-lg">
                  HOME <HomeIcon className="h-6 w-6 ml-2" />
                </span>
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {isOpen && (
        <nav className="absolute top-16 left-5 w-48 bg-[#f2efeb] shadow-lg rounded-lg transition-transform">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link
                href="/"
                className="block text-gray-800 hover:bg-[#e0ddd7] p-2 rounded duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#sobre"
                className="block text-gray-800 hover:bg-[#e0ddd7] p-2 rounded duration-200"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
