import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Contactimg from "../assets/images/contact.png";

function ContactForm() {
  const [state, handleSubmit] = useForm("mgvkajzy");

  if (state.succeeded) {
    return (
      <p className="text-green-600 text-center text-lg mt-4">
        Thanks for joining!
      </p>
    );
  }

  return (
    <>
    <div>
      <h1 className="text-center text-3xl text-white  p-5" id="Contact">
        Contact us
      </h1>

      
      <div className=" flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-6">
        <img
          src={Contactimg}
          className="w-full md:w-[400px] "
          alt="Contact"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg p-6bg-gradient-to-b from-slate-900 to-gray-800 rounded-2xl space-y-4 shadow-md"
        >
          <div>
            <label htmlFor="Name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              id="Name"
              type="text"
              name="Name"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              prefix="Name"
              field="Name"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Location Section */}
      <div id="location" className="text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl  font-bold mb-4">Our Address</h2>
            <p className="text-white/50">
            SKS Plumbing Works<br />
              Peace Pearl - 1, Flat no 501 <br />suncity, Hyderabad, Telangana, 500086
            </p>
            <p className="mt-4 text-white/50">Phone: +91 78422 72786</p>
            <p className="text-white/50">Email: sksplumblingworks.com</p>
          </div>

          <div>
            <iframe
              title="Peace Pearl - 1 Location"
              className="w-full h-64 rounded-md shadow"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7977684478883!2d78.4048264!3d17.3568469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb971992e2fdd7%3A0xc13883fe92cb739d!2sPeace%20Pearl%20-%201!5e0!3m2!1sen!2sin!4v1714919313122!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-5">
        <div className="text-center">
          <p>
            Copyright © 2019 <a href="https://www.sksplumbingworks.in/">www.sksplumbingworks.in</a>, All Rights Reserved
          </p>
        </div>
      </div>
      </div>
    </>
  );
}

export default ContactForm;
