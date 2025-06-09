import React from "react";

const Companies: React.FC = () => {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-mono mb-4">Companies I Work With</h2>
      <div className="flex flex-col gap-6">
        {/* RoutePay */}
        <div className="border rounded-lg p-6">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/routepay.png"
                alt="Routepay"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-medium underline">
              {" "}
              <a
                href="https://routepay.com/"
                className="text-inherit"
                target="_blank"
              >
                Routepay Fintech
              </a>{" "}
            </h3>
            <p className="text-gray-600">Financial Service Partner.</p>
          </div>
        </div>

        {/* Obsync */}
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
                <path
                  d="M12 2C10.3431 2 9 3.34315 9 5V19C9 20.6569 10.3431 22 12 22C13.6569 22 15 20.6569 15 19V5C15 3.34315 13.6569 2 12 2Z"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22C6.65685 22 8 20.6569 8 19V5C8 3.34315 6.65685 2 5 2Z"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M19 2C17.3431 2 16 3.34315 16 5V19C16 20.6569 17.3431 22 19 22C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2Z"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium underline">Obsync Inc.</h3>
            <p className="text-gray-600">Software development consultant.</p>
          </div>
        </div>

        {/* Population Council */}
        <div className="border rounded-lg p-6 border-dashed">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/population_council.jpeg"
                alt="Population Council"
                className="w-full h-full object-contain rounded"
              />
            </div>
            <h3 className="text-xl font-medium underline">
              <a
                href="https://popcouncil.org/"
                className="text-inherit"
                target="_blank"
              >
                Population Council
              </a>{" "}
            </h3>
            <p className="text-gray-600">INGO AID Program</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
