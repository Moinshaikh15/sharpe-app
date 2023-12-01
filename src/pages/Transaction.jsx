import { React, useState } from "react";

export default function Transaction() {
  let [errorMsg, setErrorMsg] = useState(null);
  let [showErrMsgFor, setShowErrMsgFor] = useState(null);
  let [showFormSuccessMsg, setShowFormSuccessMsg] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowErrMsgFor(null);

    let walletAddress = event.target["wallet-address"].value;
    let amount = event.target.amount.value;

    // wallet address validation
    const regex = /^0x[a-fA-F0-9]{40}$/;
    if (!walletAddress) {
      setShowErrMsgFor("wallet-address");
      setErrorMsg("Wallet address field cannot be empty");

      return;
    } else if (!regex.test(walletAddress)) {
      setShowErrMsgFor("wallet-address");
      setErrorMsg(
        "Invalid wallet address. Please enter a correct wallet address."
      );

      return;
    }

    // amount validation
    const min = 0;
    const max = 10000;

    if(!amount){
      setShowErrMsgFor("amount");
      setErrorMsg(`Please enter a amount`);
      return;
    }
    else if (amount < min || amount > max) {
      setShowErrMsgFor("amount");
      setErrorMsg(`Amount must be between ${min} and ${max}`);
      return;
    }

    event.target["wallet-address"].value = "";
    event.target.amount.value = "";
    setShowFormSuccessMsg(true);
    setTimeout(() => {
      setShowFormSuccessMsg(false);
    }, 2000);
    console.log("Form Submitted Successfully!");
  };
  return (
    <div className="w-full h-screen pt-20 flex flex-col items-center justify-start gap-6 border border-red-600">
      {showFormSuccessMsg && (
        <span className=" bg-green-600 text-white p-2 rounded-lg absolute top-2 z-20 animate-[wiggle_1s_ease-in-out]">
          Form Submitted Successfully!
        </span>
      )}

      <span className="text-2xl">Transaction</span>

      <form
        action=""
        onSubmit={handleSubmit}
        className=" w-96 flex flex-col items-start justify-center gap-4"
      >
        <div className=" w-full flex flex-col items-start justify-center gap-2">
          <label htmlFor="wallet-address">Wallet Address</label>
          <input
            type="text"
            id="wallet-address"
            name="wallet-address"
            placeholder="E.g. 0x742d35C....."
            className="w-full form-input rounded"
          />
          {showErrMsgFor === "wallet-address" && (
            <span className=" text-red-700">{errorMsg}</span>
          )}
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Between 0 - 10000"
            className="w-full form-input rounded"
          />
          {showErrMsgFor === "amount" && (
            <span className=" text-red-700 ">{errorMsg}</span>
          )}
        </div>
        <button type="submit" className="bg-black text-white p-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
