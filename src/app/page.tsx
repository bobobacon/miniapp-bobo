"use client";

import { getCustomerProfile, initAuth, initPayment } from "@/lib/frontend";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Image
        src={"/assets/logo/mini-app-logo.svg"}
        className="logo mini-app"
        width={96}
        height={96}
        alt="Mini App logo"
      />
      <div className="flex flex-col justify-center items-center pt-14">
        <h1 className="text-3xl font-semibold">Welcome to Mini App</h1>
      </div>
      {/*Example of how to use the functions from the lib/frontend/index.ts*/}
      {/* uncomment the button below to enable exchange token button */}
      <div className="flex gap-[24px] items-center my-[35px]">
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick={() =>
              initAuth(
                (result) => {
                  // add logic to handle accessToken here
                  console.log(result);
                  sessionStorage.setItem("accessToken", result.accessToken);
                },
                (errorCode, errorDescription) => {
                  console.error(errorCode, errorDescription);
                }
              )
            }
          >
            Exchange Token
          </button>
        </div>
        {/* uncomment the button below to enable get customer profile button */}
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick={async () => {
              const result = await getCustomerProfile(
                sessionStorage.getItem("accessToken") ?? ""
              );
              console.log(result);
            }}
          >
            Get Customer Profile
          </button>
        </div>
        {/* uncomment the button below to enable payment button */}
        <div className="relative inline-flex  group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <button
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick={() =>
              initPayment((errorCode, errorDescription) => {
                console.error(errorCode, errorDescription);
              })
            }
          >
            Payment
          </button>
        </div>
      </div>
    </div>
  );
}
