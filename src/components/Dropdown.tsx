import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    {
      name: "Raw",
      link: "/raw",
    },
    {
      name: "Applications",
      link: "/applications",
    },
    {
      name: "Resources",
      link: "/resources",
    },
  ];
  return (
    <div
      className="relative inline-block text-left "
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger button */}
      <button className="text-sm font-semibold leading-6 text-gray-900">
        Features
      </button>
      {isOpen && (
        <div className="origin-top-right absolute -left-4 right-0 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map(({ name, link }) => (
              <Link
                to={link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
