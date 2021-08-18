import React, { FC, useEffect } from "react";

import Input from "../Inputs/Basic";

interface SettingsProps {}

const Card: FC<SettingsProps> = () => {
  return (
    <div className="py-4 px-8 bg-white shadow-lg my-20  border border-gray-300 h-2/3 w-3/4">
      <div className="flex justify-start -mt-14 -ml-8">
        <div className="h-10 border-2 border-gray-300 px-3 py-1 bg-white font-bold text-gray-300 cursor-pointer">
          <span>{"<"} Go Back</span>
        </div>
      </div>
      <div className="flex justify-end -mt-10 -mr-8">
        <div className="h-10 border-2 border-gray-300 px-3 py-1 border-r bg-white font-bold text-gray-300 cursor-pointer">
          <span>Billing/Account</span>
        </div>
        <div className="h-10 border-2 border-gray-300 px-3 py-1 border-l bg-white font-bold cursor-pointer">
          <span>Amazon Settings</span>
        </div>
      </div>
      <div className="grid divide-x-2">
        <div className="row-start-1 pr-8 pl-2">
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold pb-5 pt-10 font-sans">
              <span>Amazon Account: </span>{" "}
              <span className="text-red-600">Not Connected </span>
            </h1>
          </div>
          <form>
            <div className="flex justify-center">
              <div className="mr-20">
                <Input id="sellerId" label="AMAZON SELLER ID" />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mr-20">
                <Input id="authId" label="AMAZON AUTH ID" />
              </div>
            </div>
            <div className="flex justify-center -ml-20 mr-20">
              <input
                className="mt-10 mr-5 bg-primary uppercase hover:bg-primaryLight text-white font-bold py-2 px-12 mb-6 rounded cursor-pointer"
                type="submit"
                name="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
        <div className="row-end-2">
          <div className="flex justify-start pl-10">
            <h1 className="text-2xl font-bold pb-5 pt-10 font-sans text-gray-500">
              <span>Step-By-Step Guide </span>{" "}
            </h1>
          </div>
          <div className="flex justify-start pl-10">
            <h1 className="text-1xl font-bold pb-3 font-sans text-gray-500">
              <span>Step 1</span> <br />
              <span className="text-sm font-normal text-gray-400 font-semibold">
                Copy this information:
              </span>
              <br />
              <span className="text-sm font-normal text-gray-400 font-semibold">
                <span className="pl-3">Name: </span>
                <span className="pl-3 underline">NUPRICE </span>
              </span>
              <br />
              <span className="text-sm font-normal text-gray-400 font-semibold">
                <span className="pl-3">Developer ID: </span>
                <span className="pl-3 underline">377661476117 </span>
              </span>
            </h1>
          </div>
          <div className="flex justify-start pl-10">
            <h1 className="text-1xl font-bold pb-5 font-sans text-gray-500">
              <span>Step 2</span> <br />
              <span className="text-sm font-normal text-gray-400 font-semibold">
                Click the button below and enter the above information on that
                page. Click "Next" and accept the terms and conditions.
              </span>
            </h1>
          </div>
          <div className="flex justify-start pl-10">
            <h1 className="text-1xl font-bold pb-5 font-sans text-gray-500">
              <span>Step 3</span> <br />
              <span className="text-sm font-normal text-gray-400 font-semibold">
                Copy your Seller ID and your Amazon Auth Token and paste on this
                page.
              </span>
              <br />
              <input
                className="mt-10 mr-5 bg-gray-500 uppercase hover:bg-gray-600 text-white font-bold py-2 px-12 mb-6 rounded cursor-pointer"
                type="submit"
                name="mws"
                value="Get MWS Keys"
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
