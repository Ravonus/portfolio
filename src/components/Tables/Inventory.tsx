import React, { FC, useEffect, useState } from "react";

import Input from "../Inputs/Basic";

interface TableProps {}

function isOdd(num) {
  return num % 2;
}

const tableDataInfo = {
  thead: [
    "LISTED",
    "UPDATED",
    "ASIN",
    "SKU",
    "TITLE",
    "eScore",
    "CURRENT",
    "Buy Box",
    "U- MF",
    "U - FBA",
  ],
  data: [
    {
      check: "",
      listed: "300 days",
      updated: "36 days ago",
      asin: "1234",
      sku: "my-sku",
      title: "This is the title it is a bit bigger than other things.",
      rank: { eScore: 45, rank: "2.3m" },
      current: 401.99,
      bb: 51.12,
      mf: [5, 54, 6, 12, 54.32, 54.71],
      fba: [4, 5, 6.12, 7.33],
    },
    {
      check: "",
      listed: "300 days",
      updated: "36 days ago",
      asin: "1234",
      sku: "my-sku",
      title: "This is the titlez",
      rank: { eScore: 45, rank: "2.3m" },
      current: 41.99,
      bb: 51.23,
      mf: [5],
      fba: [43],
    },
  ],
};

const Table: FC<TableProps> = (props) => {
  const [tableData, setTableData] = useState(tableDataInfo);

  function TableRow(props) {
    let { col, value } = props;
    console.log(col, value);
    if (col === "rank") {
      value = (
        <>
          <div>{value.eScore}</div>
          <div>{value.rank}</div>
        </>
      );
    } else if (col === "current") {
      value = (
        <>
          <span
            style={{ marginTop: 4 }}
            className="absolute ml-1 text-red-500 font-bold"
          >
            $
          </span>
          <input
            style={{ width: 70 }}
            className="font-bold text-red-500 text-xs text-gray-700 border-2 border-gray-300 h-6 focus:border-gray-300 font-bold bg-transparent focus:bg-transparent"
            type="text"
            value={value}
          />
        </>
      );
    } else if (col === "updated") {
      value = <span className="truncate">{value}</span>;
    } else if (col === "bb") {
      value = (
        <>
          <span>$</span>
          <span>{value}</span>
        </>
      );
    } else if (col === "mf") {
      value = (
        <>
          {value.map((price, i) =>
            i < 4 ? (
              <>
                <div>
                  <span>$</span>
                  <span>{price}</span>
                </div>
              </>
            ) : null
          )}
        </>
      );
    } else if (col === "fba") {
      value = (
        <>
          {value.map((price, i) =>
            i < 4 ? (
              <>
                <div>
                  <span>$</span>
                  <span>{price}</span>
                </div>
              </>
            ) : null
          )}
        </>
      );
    } else value = <span>{value}</span>;

    return value;
  }

  return (
    <table
      id="inventory"
      style={{
        overflow: "auto",
        borderCollapse: "separate",
        borderSpacing: "0 5px",
      }}
      cellSpacing="0"
      className="border-collapse w-full"
    >
      <thead
        style={{}}
        className="text-black whitespace-nowrap text-sm text-left"
      >
        <tr>
          <th className="p-1 border-2 border-r-0 border-gray-300">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-primary ml-2"
            />
          </th>
          {tableData.thead.map((info, index) => {
            return (
              <th
                className={`p-1 font-bold uppercase bg-white text-gray-600 ${
                  index === tableData.thead.length - 1 ? "border-r" : " "
                } border-t-2 border-b-2 border-l-0 border-gray-300 hidden lg:table-cell`}
              >
                <span className="ml-1">{info}</span>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="text-primary">
        {tableData.data.map((data, i) => {
          const theads: any = Object.keys(data);
          return (
            <tr
              key={`f{i}`}
              className={`${
                isOdd(i) ? "bg-accent" : "bg-white"
              } lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 border-4 border-primary text-left`}
            >
              {theads.map((thead, i: number) => {
                const value = data[thead];
                return (
                  <td
                    key={i}
                    className={`${i === 0 ? "" : "border-l-0"} ${
                      i === theads.length - 1 ? "" : "border-r-0"
                    } w-full lg:w-auto p-3 text-gray-800 text-left border-2 block lg:table-cell relative lg:static text-sm`}
                  >
                    {thead !== "check" ? (
                      <span className="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">
                        {thead}
                      </span>
                    ) : null}
                    {thead !== "check" ? (
                      //TODO: WE need to fix this it does not work on mobile view.
                      <div
                        style={{
                          whiteSpace: "pre-wrap",
                          lineHeight: "14px",
                          width:
                            thead === "title"
                              ? 200
                              : thead === "sku"
                              ? 100
                              : thead === "listed" ||
                                thead === "asin" ||
                                thead === "current" ||
                                thead === "updated"
                              ? 70
                              : 50,
                        }}
                      >
                        <TableRow col={thead} value={value} />
                      </div>
                    ) : (
                      <div
                        className="flex justify-between"
                        style={{ width: 63 }}
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox h-5 w-5 text-primary mt-3"
                        />
                        <div
                          className="bg-primary relative"
                          style={{ width: 43, height: 51, bottom: 0, left: 15 }}
                        ></div>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}

        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              aria-current="page"
              className="z-10 bg-accent border-primary text-secondary relative inline-flex items-center px-4 py-2 border text-sm font-bold"
            >
              1
            </a>

            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>
      </tbody>
    </table>
  );
};

export default Table;
