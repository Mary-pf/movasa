"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

export default function QuestionStep({ title, breadcrumb, question, options, prevStep, nextStep }) {
  const router = useRouter();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (selected) {
      console.log("انتخاب شد:", selected);
      router.push(nextStep); 
    } else {
      alert("لطفا یک گزینه انتخاب کنید.");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-6">
      {/* Header */}
      <div className="w-full max-w-lg flex items-center justify-between px-4 py-2 border-b">
        <h1 className="text-lg font-medium text-gray-700">{title}</h1>
        <div className="text-sm text-blue-600 cursor-pointer">تا مقایسه قیمت</div>
      </div>

      {/* Breadcrumb */}
      <div className="w-full max-w-lg text-sm text-gray-500 px-4 mt-2">
        {breadcrumb}
      </div>

      {/* Question */}
      <div className="w-full max-w-lg mt-6 px-4">
        <p className="text-gray-800 font-medium">{question}</p>

        <div className="mt-4 space-y-3">
          {options.map((opt) => (
            <label
              key={opt.id}
              className={`flex items-center border rounded-lg p-3 cursor-pointer transition ${
                selected === opt.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="option"
                checked={selected === opt.id}
                onChange={() => setSelected(opt.id)}
                className="ml-2"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-lg flex justify-between items-center mt-auto px-4 py-6">
        <button
          onClick={() => router.push(prevStep)}
          className="flex items-center gap-1 text-blue-600"
        >
          <FiArrowRight />
          مرحله قبل
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-2"
        >
          تایید و ادامه
        </button>
      </div>
    </div>
  );
}