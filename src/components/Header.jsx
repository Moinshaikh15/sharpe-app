import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let goto = useNavigate();
  let [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const currentPageName = window.location.pathname.split("/").pop();
    setCurrentPage(currentPageName);
    
  }, []);

  return (
    <div className="w-full fixed top-0 flex justify-between items-center p-4 border bg-white z-10">
      <h1 className="font-bold text-xl">Sharpe App</h1>

      <div>
        <ul className="flex gap-2 items-center">
          <li
            className={`${
              currentPage === "home" && "underline"
            } hover:cursor-pointer`}
            onClick={() => {
              setCurrentPage("home");
              goto("/");
            }}
          >
            Home
          </li>
          <li
            className={`${
              currentPage === "transaction" && "underline"
            } hover:cursor-pointer`}
            onClick={() => {
              setCurrentPage("transaction");
              goto("/transaction");
            }}
          >
            Transaction
          </li>
          <li
            className={`${
              currentPage === "data" && "underline"
            } hover:cursor-pointer`}
            onClick={() => {
              setCurrentPage("data");
              goto("/data");
            }}
          >
            Data
          </li>
        </ul>
      </div>
    </div>
  );
}
