import React from "react";
import { FirstYearCard } from "./FirstYearCard";

export const FirstYear = ({ id }) => (
  <div className="bg-indigo-700 lg:m-12 mx-4 my-6 rounded-lg" id={id}>
    <h1 className="text-white font-semibold text-2xl p-2">First Year</h1>
    <FirstYearCard />
  </div>
);