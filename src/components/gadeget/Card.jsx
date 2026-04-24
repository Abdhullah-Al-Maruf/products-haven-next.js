import Image from "next/image";
import React from "react";

const Card = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-200 max-h-[350px] flex flex-col">

      {/* Image */}
      <figure className="p-5 flex justify-center">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={180}
          height={180}
          className="rounded-xl object-contain"
        />
      </figure>

      {/* Content */}
      <div className="card-body flex flex-col justify-between flex-1">
        <div>
          <h2 className="card-title text-base">{product.title}</h2>
          <p className="text-gray-500 font-semibold mt-2">
            Price: ${product.price}
          </p>
        </div>

        <div className="card-actions mt-4">
          <button className="btn btn-primary btn-sm rounded-full w-full">
            View Details
          </button>
        </div>
      </div>

    </div>
  );
};

export default Card;