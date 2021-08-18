import React, { FC, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSearch } from "@fortawesome/free-solid-svg-icons";

import Table from "../Tables/Inventory";

interface CardProps {}

const Card: FC<CardProps> = () => {
  return (
    <div className="py-4 px-8 bg-white shadow-lg my-20 border border-gray-300 h-2/3 font-montserrat">
      <div className="flex justify-start -mt-14 -ml-8">
        <div className="h-10 border-2 border-gray-300 border-r-0 px-3 py-1 bg-white font-bold text-gray-300 cursor-pointer">
          <FontAwesomeIcon className="text-xl center mt-1" icon={faCog} />
        </div>

        <div className="bg-white flex items-center h-10 bg-white font-bold text-gray-300 cursor-pointer ring-transparent">
          <input
            className="ring-transparent-important placeholder-gray-400 px-2 text-gray-700 leading-tight outline-none border-2 border-gray-300 h-10 focus:border-gray-300 font-extrabold"
            id="search"
            type="text"
            placeholder="SEARCH..."
          />
          <div className="pr-2 -ml-10">
            <button className="bg-primary text-white rounded-full p-2 hover:bg-primaryLight focus:outline-none w-7 h-7 flex items-center justify-center">
              <FontAwesomeIcon className="py-1 text-2xl" icon={faSearch} />
            </button>
          </div>
          <div className="h-10 border-2 border-gray-300 px-5 py-1 border-r bg-white font-bold text-gray-400 cursor-pointer">
            <span>FILTERS</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end -mt-10 -mr-8">
        <div className="h-10 border-2 border-gray-300 px-3 py-1 border-r bg-white font-bold text-gray-400 cursor-pointer">
          <span>Active - 0</span>
          <span className="text-xs pt-1 ml-5 cursor-pointer hover:text-primary">
            X
          </span>
        </div>
        <div className="h-10 border-2 border-gray-300 px-3 py-1 border-r bg-white font-bold text-gray-400 cursor-pointer">
          <span>Inactive - 0</span>
          <span className="text-xs pt-1 ml-5 cursor-pointer hover:text-primary">
            X
          </span>
        </div>
        <div className="h-10 text-xl border-2 border-gray-300 px-3 py-1 border-l bg-white font-bold cursor-pointer">
          <div className="flex justify-between">
            <span>Stranded - 0</span>
            <span className="text-xs ml-5 cursor-pointer hover:text-primary leading-6">
              X
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <input
            className="mt-10 mr-5 bg-gray-400 uppercase hover:bg-gray-600 text-white font-bold py-1 px-2 mb-6 rounded cursor-pointer"
            type="submit"
            name="mws"
            value="Match Target"
          />
          <input
            className="mt-10 mr-5 bg-gray-400 uppercase hover:bg-gray-600 text-white font-bold py-1 px-2 mb-6 rounded cursor-pointer"
            type="submit"
            name="mws"
            value="Match Buy Box"
          />
          <input
            className="mt-10 mr-5 bg-gray-400 uppercase hover:bg-gray-600 text-white font-bold py-1 px-2 mb-6 rounded cursor-pointer"
            type="submit"
            name="mws"
            value="Dispose"
          />
        </div>
        <div>
          <span className="font-sans font-semibold text-gray-400 pr-3">
            TRIGGER SET -{" "}
          </span>
          <input
            className="mt-10 mr-5 bg-green-500 uppercase hover:bg-green-400 text-white font-bold py-2 px-2 mb-6 rounded cursor-pointer"
            type="submit"
            name="mws"
            value="SCOUTIQ DEFAULT"
          />
        </div>
      </div>
      <Table></Table>
    </div>
  );
};

export default Card;
