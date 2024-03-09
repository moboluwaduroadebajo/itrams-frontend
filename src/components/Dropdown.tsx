import React, { useState } from "react";
import { Icons } from "./icons";
import { Transition } from "@headlessui/react";

interface Props {
  //   label: string;
  listArray: string[];
  toggleContainer: React.ReactNode;
  setSelected: (arg: string) => void;
}

const Dropdown = ({ listArray, toggleContainer, setSelected }: Props) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (list: string) => {
    setSelected(list);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>{toggleContainer}</div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <div className="bg-white mt-2 w-auto rounded-md overflow-y-auto shadow-lg z-50 absolute origin-top-right left-0">
          <div className="sticky top-0 bg-white">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 h-[40px] outline-none border-b w-full border-[#d6d6d6] bg-transparent"
              placeholder="Search"
            />
          </div>
          <div className="max-h-[250px] w-auto overflow-auto pb-2">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu">
              {listArray.map((listItem) => (
                <li
                  key={listItem}
                  className={`block py-2 px-4 hover:bg-gray-100 w-full focus:bg-gray-100 focus:outline-none cursor-pointer ${
                    listItem.toLowerCase().startsWith(search)
                      ? "block"
                      : "hidden"
                  }`}
                  onClick={() => handleSelection(listItem)}>
                  {listItem}
                </li>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Dropdown;
