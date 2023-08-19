import data, { URL } from "../data";

const Hero = () => {
  const bg = URL + "/img/3.png";

  return (
    <section
      className={`relative bg-cover bg-center bg-no-repeat`}
      id="hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-52 md:py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Calidad que perdura:
            <strong className="block font-extrabold text-primary-100">
              puertas y aluminios a la medida de tus necesidades
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Descubre la elegancia y durabilidad de nuestras puertas y aluminios
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              className="block w-full rounded bg-primary-100 px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary-200 focus:outline-none focus:ring active:bg-primary-200 sm:w-auto transition-all duration-200 ease-in"
              href={data.info.social[1].url}
              rel="noreferrer"
              target="_blank"
            >
              Cotiza tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
