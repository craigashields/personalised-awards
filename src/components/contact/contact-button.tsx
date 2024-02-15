"use client";
import React from "react";
import { useFormStatus } from "react-dom";

export default function ContactButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none disabled:bg-gray-500"
      disabled={pending}
    >
      Submit {pending && "..."}
    </button>
  );
}
