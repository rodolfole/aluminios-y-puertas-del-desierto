import { FC } from "react";

type Props = {
  product: {
    img: string;
    name: string;
  };
};

const Product: FC<Props> = ({ product: { img, name } }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="flex-shrink-0 rounded-lg">
        <img className="transition ease-in-out delay-150 hover:scale-110" width={360} height={360} src={img} alt={name} />
      </span>

    </div>
  );
};

export default Product;
