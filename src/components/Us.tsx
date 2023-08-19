import data, { URL } from "../data";

const Us = () => {
  return (
    <section
      className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2"
      id="us"
    >
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Nosotros
          </h2>

          <p className="text-gray-500 md:mt-4 md:block text-justify">
            {data.us}
          </p>

          <div className="mt-4 md:mt-8">
            <a
              className="cursor-pointer inline-block rounded bg-primary-100 px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-200 focus:outline-none focus:ring focus:ring-yellow-400"
              download
              href={`${URL}/pdf/Folleto.pdf`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Conócenos
            </a>
          </div>
        </div>
      </div>

      <img
        alt="Puertas"
        src={`${URL}/img/1.png`}
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
};

export default Us;
