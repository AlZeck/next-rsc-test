"use client"; // <- Directive only needed when using the app directory

import { type ReactNode, useState } from "react";

export default function Tabs({
  tab1,
  tab2,
}: {
  tab1: ReactNode;
  tab2: ReactNode;
}) {
  const [tab, setTab] = useState(1);
  return (
    <div className="bg-white p-4 rounded-lg w-96 border border-neutral-300 shadow">
      <div className="flex rounded-md overflow-clip border border-neutral-300">
        <button
          className={`flex-1 p-2 text-center ${
            tab === 1 ? "bg-gray-200" : "bg-gray-100"
          }`}
          onClick={() => setTab(1)}
        >
          Pokemon 1
        </button>
        <button
          className={`flex-1 p-2 text-center ${
            tab === 2 ? "bg-gray-200" : "bg-gray-100"
          }`}
          onClick={() => setTab(2)}
        >
          Pokemon 2
        </button>
      </div>
      <div className="p-2">{tab === 1 ? tab1 : tab2}</div>
    </div>
  );
}
