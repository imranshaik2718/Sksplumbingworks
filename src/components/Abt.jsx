import React from 'react'
import work1 from "../assets/images/vlog 6.avif";
import work2 from "../assets/images/vlog 4.webp";
import work3 from "../assets/images/Plumbing-Main-1.jpg";
function About() {
  return (
    <div>
      <>
      <div className="text-center text-white px-6 md:px-12 py-10 ">
        
        <div className="text-center text-white px-6 md:px-12 py-10 mt-5"  id="Aboutus">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Best Plumbing Services in Hyderabad
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mt-2">
            Trusted Local Plumber Near You
          </h3>
          <p className="mt-6 text-base md:text-lg max-w-3xl mx-auto">
            With over <span className="font-semibold">15 years</span> of
            experience, <span className="font-bold">SKS Plumbing Works</span>{" "}
            has proudly delivered top-quality plumbing, firefighting, and
            interior services across Hyderabad. We are committed to{" "}
            <span className="italic">100% customer satisfaction</span> — making
            us one of the most trusted names in the industry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch gap-6 p-6 mt-3 ">
          <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={work2}
              alt="Interior Work"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Renovated Interior, Exterior Repair and Services
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We provide a complete range of services including Painting,
                False Ceiling, Cupboards, Electrical Work, Doors, Tiles,
                Flooring and more.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  fill="none"
                  viewBox="0 0 14 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={work1}
              alt="Plumbing Work"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Commercial & Residential Plumbing Contracts
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We offer a full range of plumbing contracts and repair services
                in Hyderabad. Our technicians are equipped to handle all needs.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  fill="none"
                  viewBox="0 0 14 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <img
              className="rounded-t-lg w-full h-48 object-cover"
              src={work3}
              alt="Fire Safety"
            />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Advanced Fire Safety and Fighting Works
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Certified fire & safety systems for buildings under or post
                construction. We offer pipelines, sprinklers, alarm systems &
                more.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition"
              >
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  fill="none"
                  viewBox="0 0 14 10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
    </div>
  )
}

export default About
