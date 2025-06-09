import React from "react";

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-mono mb-8">Featured Products</h2>
      <div className="flex flex-col gap-6">
        {/* Routepay App */}
        <div className="border rounded-lg p-6">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 bg-black rounded-md flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="3"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                />
                <rect
                  x="3"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="14"
                  width="7"
                  height="7"
                  rx="1"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium underline">
              <a href="https://portal.routepay.com/" className="text-inherit">
                Routepay Portal
              </a>
            </h3>
            <p className="text-gray-600">
              Routepay Portal is a web application (B2B) that allows merchants
              to manage their customers, transactions, and payments. It is built
              using React and TypeScript.
            </p>
          </div>
        </div>

        {/* Routepay Now */}
        <div className="border rounded-lg p-6">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 bg-indigo-100 rounded-md flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="2" y="2" width="6" height="6" rx="1" fill="#4F46E5" />
                <rect x="9" y="2" width="6" height="6" rx="1" fill="#4F46E5" />
                <rect x="16" y="2" width="6" height="6" rx="1" fill="#4F46E5" />
                <rect x="2" y="9" width="6" height="6" rx="1" fill="#4F46E5" />
                <rect x="9" y="9" width="6" height="6" rx="1" fill="#4F46E5" />
                <rect x="16" y="9" width="6" height="6" rx="1" fill="#4F46E5" />
                <rect x="2" y="16" width="6" height="6" rx="1" fill="#4F46E5" />
                <rect x="9" y="16" width="6" height="6" rx="1" fill="#4F46E5" />
                <rect
                  x="16"
                  y="16"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#4F46E5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium underline">Routepay Now</h3>
            <p className="text-gray-600">
              Routepay Now is a web application (B2C) that allows customers
              carry out bills payments on the go. It is built using React Native
              and TypeScript. (Still in development)
            </p>
          </div>
        </div>

        {/* Nippy eats */}
        <div className="border rounded-lg p-6">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="5" stroke="black" strokeWidth="2" />
                <path
                  d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium underline">Nippy Eats</h3>
            <p className="text-gray-600">
              A web & mobile application that allows users to order food from
              restaurants. It is built using React/Next and TypeScript. (Funding
              was stopped)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
