import Header from "./components/header";
import Hero from "./components/info";
import Content from "./components/content";
import Footer from "./components/footer";
import About from "./components/about";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center mx-auto w-full min-h-[230vh] pt-24">
      <Header />
      <main className="mt-[20vh] mb-auto">
        <Hero />
        <Content />
      </main>
      <div id="sobre" className="mb-[15vh]">
          <About />
        </div>
      <Footer />
    </div>
  );
}
