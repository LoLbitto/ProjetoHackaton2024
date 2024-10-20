import Header from "./components/header";
import Hero from "./components/info";
import Content from "./components/content";
import Footer from "./components/footer";
import About from "./components/about";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center mx-auto w-full min-h-screen pt-24">
      <Header />

      <main className="mt-10 w-full flex flex-col items-center">
        <section className="w-full flex flex-col items-center">
          <Hero />
        </section>

        <section className="w-full flex flex-col items-center my-10">
          <div className="flex flex-row items-center w-full">
            <div className="flex-1">
              <Content imageSrc="/content-imagem.webp" />
            </div>
          </div>
        </section>
      </main>

      <section id="sobre" className="w-full mt-20 mb-36 scroll-mt-20">
        <About />
        <img
          src="/sobre-imagem.jpg"
          alt="Imagem sobre nós"
          className="mt-24 mx-auto h-auto object-cover rounded-lg shadow-md"
        />
      </section>

      <Footer />
    </div>
  );
}
