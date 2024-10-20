const Content = ({ imageSrc }) => {
  return (
    <section className="py-6 w-full bg-gray-800 bg-opacity-75 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="stats lg:w-2/5 text-center lg:text-left px-4 lg:px-0">
          <p className="text-base lg:text-3xl leading-relaxed">
            DO TOTAL DE ESTABELECIMENTOS AGROPECUÁRIOS E AQUICULTORES NACIONAIS,
            76,8% CORRESPONDIAM À AGRICULTURA FAMILIAR
          </p>
        </div>
        <div className="lg:w-1/3 w-full mt-4 lg:mt-0 lg:ml-8">
          <img
            src={imageSrc}
            alt="Imagem de conteúdo"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
