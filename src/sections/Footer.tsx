import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover';
import { AtSign, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8">
      <hr className="border-t border-gray-200 mb-6" />
      <div className="flex justify-center space-x-6">
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors">
              X
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-60">
            <div className="flex flex-col items-center space-y-2">
              <Twitter className="h-8 w-8 text-blue-500" />
              <p className="text-sm font-medium">@shadik411</p>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <button className="text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors">
              LinkedIn
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-60">
            <div className="flex flex-col items-center space-y-2">
              <Linkedin className="h-8 w-8 text-blue-700" />
              <p className="text-sm font-medium">linkedin.com/in/suleimanabubakarsadeeq</p>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <button className="text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors">
              GitHub
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-60">
            <div className="flex flex-col items-center space-y-2">
              <Github className="h-8 w-8 text-gray-900" />
              <p className="text-sm font-medium">https://github.com/SADIQQ005</p>
            </div>
          </PopoverContent>
        </Popover>


        <Popover>
          <PopoverTrigger asChild>
            <button className="text-gray-600 hover:text-gray-900 underline underline-offset-4 transition-colors">
              Email
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-60">
            <div className="flex flex-col items-center space-y-2">
              <AtSign className="h-8 w-8 text-red-500" />
              <p className="text-sm font-medium">abusadiqq005@gmail.com</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </footer>
  );
};

export default Footer;