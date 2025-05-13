import React, { useState, useEffect } from 'react';
import cartimg from "../../assets/images/cart icon.svg";

const items = [
  { id: 1, name: 'Tap Leakage Fix', price: '₹99', reviews: '15K reviews' },
  { id: 2, name: 'Flush Tank Repair', price: '₹149', reviews: '12K reviews' },
  { id: 3, name: 'Shower Repair', price: '₹129', reviews: '9K reviews' },
  { id: 4, name: 'Water Pipe Crack Fix', price: '₹199', reviews: '8K reviews' },
  { id: 5, name: 'Angle Valve Repair', price: '₹79', reviews: '10K reviews' },
  { id: 6, name: 'Sink Blockage Removal', price: '₹99', reviews: '20K reviews' },
  { id: 7, name: 'Toilet Jet Spray Repair', price: '₹89', reviews: '7K reviews' },
  { id: 8, name: 'Bathroom Tap Fix', price: '₹129', reviews: '11K reviews' },
  { id: 9, name: 'Geyser Leakage Check', price: '₹149', reviews: '6K reviews' },
  { id: 10, name: 'Wall Mixer Drip Repair', price: '₹199', reviews: '5K reviews' },
];

const Repair = () => {
  const [cartCounts, setCartCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartCounts')) || {};
    setCartCounts(savedCart);

    // Calculate total price
    let total = 0;
    for (const id in savedCart) {
      const item = items.find(i => i.id === parseInt(id));
      if (item) {
        total += parseInt(item.price.replace('₹', '')) * savedCart[id];
      }
    }
    setTotalPrice(total);
  }, []);

  // Save to localStorage when cartCounts changes
  useEffect(() => {
    localStorage.setItem('cartCounts', JSON.stringify(cartCounts));
  }, [cartCounts]);

  const handleIncrement = (id, price) => {
    const numericPrice = parseInt(price.replace('₹', ''));
    const newCartCounts = {
      ...cartCounts,
      [id]: (cartCounts[id] || 0) + 1,
    };
    setCartCounts(newCartCounts);
    setTotalPrice(prev => prev + numericPrice);
  };

  const handleDecrement = (id, price) => {
    const numericPrice = parseInt(price.replace('₹', ''));
    const currentCount = cartCounts[id] || 0;
    if (currentCount <= 1) {
      const updated = { ...cartCounts };
      delete updated[id];
      setCartCounts(updated);
    } else {
      setCartCounts(prev => ({
        ...prev,
        [id]: currentCount - 1,
      }));
    }
    setTotalPrice(prev => prev - numericPrice);
  };

  return (
    <div className='bg-slate-900 text-white'>
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold  mb-6">Repair Services</h1>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold ">Total Items: {items.length}</h2>
        <h2 className="text-xl font-semibold ">Total Price: ₹{totalPrice}</h2>
        <a href="/Delivery">
          <div className="relative flex w-fit mt-4">
            <img src={cartimg} className="w-8" alt="Cart" />
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

export default Repair;
