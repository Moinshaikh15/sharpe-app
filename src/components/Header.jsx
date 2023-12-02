import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  let goto = useNavigate();
  let [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const currentPageName = window.location.pathname.split("/").pop();
    setCurrentPage(currentPageName);
    
  }, []);

  return (
    <div className="w-full fixed top-0 flex justify-between items-center p-4 px-10 bg-white z-10">
      <h1 className="font-bold text-2xl text-[#9061f7] font-['Anton'] tracking-widest">Sharpe App</h1>

      <div>
        <ul className="flex gap-4 items-center">
          <li
            className={`${
              currentPage === "" && "text-[#c68dfe]"
            } hover:cursor-pointer text-lg`}
            onClick={() => {
              setCurrentPage("");
              goto("/");
            }}
          >
            Home
          </li>
          <li
            className={`${
              currentPage === "transaction" && "text-[#c68dfe]"
            } hover:cursor-pointer text-lg`}
            onClick={() => {
              setCurrentPage("transaction");
              goto("/transaction");
            }}
          >
            Transaction
          </li>
          <li
            className={`${
              currentPage === "data" && "text-[#c68dfe]"
            } hover:cursor-pointer text-lg`}
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
