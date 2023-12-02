import { addDoc, collection } from "firebase/firestore";
import { React, useState } from "react";
import { db } from "../firebase-config";

export default function Transaction() {
  let [errorMsg, setErrorMsg] = useState(null);
  let [showErrMsgFor, setShowErrMsgFor] = useState(null);
  let [showFormSuccessMsg, setShowFormSuccessMsg] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowErrMsgFor(null); // reset error message

    //get the form values
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

    if (!amount) {
      setShowErrMsgFor("amount");
      setErrorMsg(`Please enter a amount`);
      return;
    } else if (amount < min || amount > max) {
      setShowErrMsgFor("amount");
      setErrorMsg(`Amount must be between ${min} and ${max}`);
      return;
    }

    // send data to firestore database
    try {

      //add data to transactions collection in firestore database
      await addDoc(collection(db, "transactions"), {
        walletAddress,
        amount: parseFloat(amount),
      });

      //rest form values
      event.target["wallet-address"].value = "";
      event.target.amount.value = "";

      setShowFormSuccessMsg(true);
      setTimeout(() => {
        setShowFormSuccessMsg(false);
      }, 2000);

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="w-full h-screen pt-20 flex flex-col items-center justify-start gap-6 bg-[url('/bg.png')] bg-center bg-cover">
      {showFormSuccessMsg && (
        <span className=" bg-green-600 text-white p-2 rounded-lg absolute top-2 z-20 animate-[wiggle_1s_ease-in-out]">
          Form Submitted Successfully!
        </span>
      )}

      <span className="text-3xl font-semibold">Transaction</span>

      <form
        action=""
        onSubmit={handleSubmit}
        className=" w-96 flex flex-col items-start justify-center gap-4"
      >
        
        <div className=" w-full flex flex-col items-start justify-center gap-2">
          <label htmlFor="wallet-address" className="text-lg">
            Wallet Address
          </label>
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
          <label htmlFor="amount" className="text-lg">
            Amount
          </label>
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

        <button
          type="submit"
          className="bg-[#9E3FFD] text-lg  text-white p-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
