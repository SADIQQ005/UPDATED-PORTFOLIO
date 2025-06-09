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
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 8H20.5L32 32H19.5L8 8Z" fill="#FF0000" />
              </svg>
            </div>
            <h3 className="text-xl font-medium underline">Routepay Fintech</h3>
            <p className="text-gray-600">Financial Service Partner.</p>
          </div>
        </div>

        {/* Obsync */}
        <div className="border rounded-lg p-6">
          <div className="flex flex-col gap-2">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="12" fill="#15C39A" />
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
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="20" cy="20" r="12" stroke="black" strokeWidth="2" />
                <path
                  d="M15 20L18 23L25 16"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium underline">
              Population Council
            </h3>
            <p className="text-gray-600">INGO AID Program</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
