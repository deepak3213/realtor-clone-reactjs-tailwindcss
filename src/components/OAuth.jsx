import React from "react";
import { FcGoogle } from "react-icons/fc";
export default function OAuth() {
  return (
    <button
      type="submit"
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 transition active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg duration-150 ease-in-out rounded"
    >
      <FcGoogle className=" bg-white text-2xl rounded-full mr-2" />
      Continue with Google
    </button>
  );
}
