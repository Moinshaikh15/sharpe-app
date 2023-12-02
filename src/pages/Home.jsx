import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="w-full h-screen  pt-20 px-10 bg-[url('/bg.png')] bg-center bg-cover bg-fixed">
        <div className="w-full p-20">
          <span className="w-[650px] block text-8xl font-bold text-[#16163f]">
            The Power of Imagination
          </span>

          <p className=" text-3xl text-[#3f3d62] mt-4 w-[600px]">
            Frontend React.js Developer Assignment Solution For Technical Round.
          </p>
        </div>
      </div>

      <div className="w-full min-h-screen p-20 px-30 flex flex-col items-start justify-start gap-5">
        <span className="text-3xl">About the App</span>
        <p className=" w-3/5 text-lg">
          This ReactJs application has been developed specifically for a
          technical frontend assignment, showcasing proficiency in React. The
          application comprises three distinct pages: the{" "}
          <span className="text-[#9166f4]">Home Page</span>,{" "}
          <span className="text-[#9166f4]">Transaction Page</span> , and{" "}
          <span className="text-[#9166f4]">Data Page</span> . Leveraging{" "}
          <span className="text-[#9166f4]">React Router</span> , I've ensured a
          smooth and seamless navigation experience across these pages.
          <br />
          <br />
          On the Home Page, you'll find a thoughtfully designed layout with
          engaging content, although it does not host any specific information.
          Transitioning to the Transaction Page, there's a user-friendly form
          prompting users to input their wallet address and transaction amount.
          Notably, I've implemented{" "}
          <span className="text-[#9166f4]"> form validation</span> and{" "}
          <span className="text-[#9166f4]">error handling</span> to enhance data
          integrity and user experience. When form is submitted{" "}
          <span className="text-[#9166f4]">
            data is added to firestore database.
          </span>
          <br />
          <br />
          The Data Page is designed to <span className="text-[#9166f4]">fetch data</span> from a specified
          API, meticulously <span className="text-[#9166f4]">filtering</span> it to display information
          relevant to <span className="text-[#9166f4]">user ID 1</span>. The data is presented in a
          structured <span className="text-[#9166f4]">table format</span>, offering a comprehensive overview.
          Additionally, the page features a <span>dynamic pie chart</span>illustrating the
          distribution of <span className="text-[#9166f4]">total posts by user ID 1</span> in comparison to the overall
          posts. This combination of tabular and visual representation provides
          users with valuable insights into the dataset.
          <br />
          <br />
          In summary, this <span className="text-[#9166f4]">ReactJs application </span> not only demonstrates technical
          prowess through the use of <span className="text-[#9166f4]">React Router</span> and <span className="text-[#9166f4]">form validation</span> but also
          ensures a rich and informative user experience with detailed <span className="text-[#9166f4]">data
          presentation</span> on the Data Page.
        </p>

        <span className="text-2xl">Tech Stack used:</span>
        <p className="text-lg font-semibold text-[#9166f4]">
          ReactJs, Tailwind CSS, Recharts, Fetch API
        </p>
      </div>

      <span className="text-xl my-6">Made by Moin Shaikh</span>
    </div>
  );
}
