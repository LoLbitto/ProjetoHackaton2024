import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/solid";
import { HomeIcon } from "@heroicons/react/solid";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#97ad7f] fixed top-0 left-0 w-full min-h-[10vh] flex items-center px-5 py-2">
      <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-2xl font-bold w-[30vw] hidden lg:block">
        HORTI-BAIRRO
      </h1>

      <nav className="flex justify-between w-full mr-0">
        <ul className="flex items-center ml-auto">
          <li>
            {router.pathname !== "/cadastro" && (
              <Link href="/cadastro">
                <span className="flex items-center text-[#336938] text-lg font-bold hover:bg-[#80a15c] duration-200 p-2 rounded-lg">
                  CADASTRAR <UserCircleIcon className="h-6 w-6 ml-2" />
                </span>
              </Link>
            )}

            {router.pathname !== "/" && (
              <Link href="/">
                <span className="flex items-center text-[#336938] text-lg font-bold hover:bg-[#80a15c] duration-200 p-2 rounded-lg">
                  HOME <HomeIcon className="h-6 w-6 ml-2" />
                </span>
              </Link>
            )}
          </li>
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
            <li>
              <Link
                href="#"
                className="block text-gray-800 hover:bg-[#e0ddd7] p-2 rounded duration-200"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-gray-800 hover:bg-[#e0ddd7] p-2 rounded duration-200"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
