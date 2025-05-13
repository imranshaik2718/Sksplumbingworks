import React from 'react';

const DeliveryPage = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = parseInt(localStorage.getItem('total')) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-800 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Delivery Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Full Name</label>
              <input type="text" placeholder="Enter name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone Number</label>
              <input type="tel" placeholder="+91"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Address</label>
              <textarea rows="3" placeholder="Address"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1">City</label>
                <input type="text" placeholder="City"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1">Pincode</label>
                <input type="text" placeholder="Pincode"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-semibold hover:scale-105 duration-300"
              onClick={() => {
                localStorage.removeItem('cart');
                localStorage.removeItem('total');
              }}
            >
              Confirm Delivery
            </button>
          </form>
        </div>

        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Order Summary</h2>

          <ul className="space-y-4">
            {cart.map(product => (
              <li key={product.id} className="flex justify-between border-b border-gray-600 pb-2">
                <div>
                  <p className="font-semibold">{product.name}</p>
                  <p className="text-sm text-gray-300">Qty: {product.qty}</p>
                </div>
                <p>₹{product.price * product.qty}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-gray-600 pt-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="mt-8 w-full bg-green-600 hover:bg-green-500 py-3 rounded-lg font-semibold hover:scale-105 duration-300"
            onClick={() => {
              localStorage.removeItem('cart');
              localStorage.removeItem('total');
              alert('Proceeding to payment...');
            }}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
