import data from "../data";
import Product from "./Product";

const Products = () => {
  return (
    <section className="bg-gray-900 py-16" id="products">
      <div className="max-w-full  flex justify-center">
        <div className="max-w-5xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Aluminios y Puertas
          </h2>
          <p className="mt-4 text-gray-300">
            Además de ofrecer productos de alta calidad en venta, también nos
            comprometemos a proporcionar una consultoría experta para ayudar a
            nuestros clientes a tomar decisiones informadas sobre los productos
            que mejor se adapten a sus necesidades, brindando productos y
            servicios que superen sus expectativas
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-center md:grid-cols-4">
        {data.products.map((p, index) => (
          <Product key={index} product={p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
