import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="w-16 h-16 bg-black rounded-md flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold">Abubkar Sadeeq</h1>
            <p className="text-gray-500">@sadeeq.____</p>
          </div>
        </div>
        <p className="text-lg mt-2">
          Building frontend solutions accross all scales including B2B startup
          solutions and mini products. Skilled in React, TypeScript, and Next.js, with a focus on
          creating user interfaces and improving performance. Familiar with
          CI/CD, automated testing.
        </p>
      </div>
    </header>
  );
};

export default Header;
