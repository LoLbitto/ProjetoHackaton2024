import Header from "./components/Header";
import Hero from "./components/Info";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center mx-auto w-full min-h-screen pt-24">
      <Header/>
      <main>
        <Hero/>
        <Content/>
      </main>
      <Footer/>
    </div>
  );
}
