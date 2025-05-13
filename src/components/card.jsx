import React, { useState } from "react";
import c1 from "../assets/images/Consultation.jpg";
import cartimg from "../assets/images/Shopping-Cart-1--Streamline-Nova.png";
const iteams = [
  {
    id: 1,
    title: "Western toilet (floor-mounted)",
    description:
      "Transform your bathroom with sleek, modern wall-mounted commode fittings. Our high-quality installations offer.",
    price: 1499,
    image: c1,
    rating: 4,
  },
  {
    id: 2,
    title: "Wall-mounted Sink",
    description:
      "Compact, elegant sinks for modern bathrooms. Durable and stylish.",
    price: 999,
    image: c1,
    rating: 5,
  },
  {
    id: 3,
    title: "Wall-mounted Sink",
    description:
      "Compact, elegant sinks for modern bathrooms. Durable and stylish.",
    price: 999,
    image: c1,
    rating: 5,
  },
  {
    id: 4,
    title: "Wall-mounted Sink",
    description:
      "Compact, elegant sinks for modern bathrooms. Durable and stylish.",
    price: 999,
    image: c1,
    rating: 5,
  },
  {
    id: 5,
    title: "Wall-mounted Sink",
    description:
      "Compact, elegant sinks for modern bathrooms. Durable and stylish.",
    price: 999,
    image: c1,
    rating: 5,
  },
  {
    id: 6,
    title: "Wall-mounted Sink",
    description:
      "Compact, elegant sinks for modern bathrooms. Durable and stylish.",
    price: 999,
    image: c1,
    rating: 5,
  },
  {
    id: 7,
    title: "Wall-mounted Sink",
    description:
      "Compact, elegant sinks for modern bathrooms. Durable and stylish.",
    price: 999,
    image: c1,
    rating: 5,
  },
];

const Card = () => {
  const [cartCounts, setCartCounts] = useState({});

  const handleIncrement = (id) => {
    setCartCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCartCounts((prev) => {
      const currentCount = prev[id] || 0;
      if (currentCount <= 1) {
        const updated = { ...prev };
        delete updated[id]; // remove from cart if 0
        return updated;
      }
      return {
        ...prev,
        [id]: currentCount - 1,
      };
    });
  };

  return (
    <>
      <a href="/Delivery">
        <div className="relative flex w-fit mt-5">
          
          <img src={cartimg} alt="img" />

          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </div>
      </a>

      <div className="flex flex-col md:flex-row md:flex-wrap iteams-center justify-center items-stretch gap-10 p-6 mt-8">
        {iteams.map((item) => {
          const count = cartCounts[item.id] || 0;

          return (
            <div
              key={item.id}
              className="w-[300px]  bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 transition-transform duration-400"
            >
              <div className="p-8">
                <img
                  className="rounded-t-lg w-full h-full object-cover"
                  src={item.image}
                  alt="product image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x200.png?text=product+image";
                  }}
                />
              </div>
              <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h5>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < item.rating ? "text-yellow-400" : "text-gray-200"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                  <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded">
                    {item.rating}.0
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{item.price}
                  </span>
                  {count === 0 ? (
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 cursor-pointer"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="text-white bg-blue-600 hover:bg-blue-700 font-bold px-2 py-1 rounded"
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-blue-700 font-semibold">
                        {count}
                      </span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="text-white bg-blue-600 hover:bg-blue-700 font-bold px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
