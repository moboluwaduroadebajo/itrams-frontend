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
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>{toggleContainer}</div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <ul className="bg-white mt-2 rounded-md overflow-y-auto shadow-lg max-h-60">
          <div className="sticky top-0 bg-white">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-8 w-full h-[40px] outline-none border-b border-[#d6d6d6] bg-transparent"
              placeholder="Search"
            />
          </div>
          {listArray.map((listItem) => (
            <li
              key={listItem}
              className={`p-2 px-8 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none cursor-pointer ${
                listItem.toLowerCase().startsWith(search) ? "block" : "hidden"
              }`}
              onClick={() => handleSelection(listItem)}>
              {listItem}
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
};

export default Dropdown;
