import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface DialogBoxProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: { name: string; href: string }[];
}

const DialogBox: React.FC<DialogBoxProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  navigation,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const features = [{title: "Raw", href:"/raw"}, {title: "Application", href: "/applications"}, {title: "Resources", href: "/resources"}]
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link to="#/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="/logo.png" alt="" />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => {
              setMobileMenuOpen(false)
              setShowDropdown(false)
            }}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setShowDropdown(true);
                }}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Feature
              </button>
              {showDropdown && (
                <ul className="px-4 ">
                  {
                    features.map(ele=> <>
                    <Link to={ele.href} onClick={()=>setMobileMenuOpen(false)}>{ele.title}</Link> 
                    <br/>
                    </>
                    )
                  }
                </ul>
              )}
            </div>
            <div className="py-6">
              <Link
                to="/raw"
                onClick={() => setMobileMenuOpen(false)}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default DialogBox;
