import React, { useState } from 'react';
import cartimg from "../../assets/images/cart icon.svg";

const items = [
  { id: 21, name: 'Tap Leakage Fix', price: '₹99', reviews: '15K reviews' },
  { id: 22, name: 'Toilet Flush Leak Repair', price: '₹149', reviews: '10K reviews' },
  { id: 23, name: 'Geyser Pipe Leak Sealing', price: '₹199', reviews: '6K reviews' },
  { id: 24, name: 'Kitchen Sink Leak Repair', price: '₹149', reviews: '13K reviews' },
  { id: 25, name: 'Shower Pipe Leakage', price: '₹179', reviews: '7K reviews' },
  { id: 26, name: 'Angle Valve Leak Fix', price: '₹89', reviews: '11K reviews' },
  { id: 27, name: 'Underground Pipe Leak Check', price: '₹299', reviews: '4K reviews' },
  { id: 28, name: 'Wall Leakage Tracing', price: '₹399', reviews: '2K reviews' },
  { id: 29, name: 'Toilet Base Leakage Fix', price: '₹249', reviews: '5K reviews' },
  { id: 30, name: 'Ceiling Water Leak Solution', price: '₹499', reviews: '3K reviews' },
];

const Leakage = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCounts, setCartCounts] = useState({});

  const handleIncrement = (id, price) => {
    const numericPrice = parseInt(price.replace('₹', ''));
    setCartCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
    setTotalPrice((prev) => prev + numericPrice);
  };

  const handleDecrement = (id, price) => {
    const numericPrice = parseInt(price.replace('₹', ''));
    setCartCounts((prev) => {
      const currentCount = prev[id] || 0;
      if (currentCount <= 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return {
        ...prev,
        [id]: currentCount - 1,
      };
    });
    setTotalPrice((prev) => prev - numericPrice);
  };

  return (
    <div className='bg-slate-900 text-white'>
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Leakage Services</h1>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Total Items: {items.length}</h2>
        <h2 className="text-xl font-semibold">Total Price: ₹{totalPrice}</h2>
        <a href="/Delivery">
                      <div className="relative flex w-fit mt-4">
                        
                        <img src={cartimg} className='w-8' alt="img" />
              
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                        {Object.keys(cartCounts).length}
                        </span>
                      </div>
                    </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          const count = cartCounts[item.id] || 0;

          return (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <img
                src="https://via.placeholder.com/250x150"
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-medium text-gray-800 mb-1">{item.name}</h2>
              <p className="text-gray-600 mb-1">Starts at {item.price}</p>
              <p className="text-sm text-gray-500 mb-3">⭐ {item.reviews}</p>

              {count === 0 ? (
                <button
                  onClick={() => handleIncrement(item.id, item.price)}
                  className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Add to cart
                </button>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(item.id, item.price)}
                    className="text-white bg-blue-600 hover:bg-blue-700 font-bold px-2 py-1 rounded"
                  >
                    −
                  </button>
                  <span className="w-6 text-center text-blue-700 font-semibold">
                    {count}
                  </span>
                  <button
                    onClick={() => handleIncrement(item.id, item.price)}
                    className="text-white bg-blue-600 hover:bg-blue-700 font-bold px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Leakage;
