import { useRouter } from "next/router";
import { useState } from "react";

export default function Step1() {
  const router = useRouter();
  const [form, setForm] = useState({
    plate1: "",
    plate2: "",
    plate3: "",
    plate4: "",
    brand: "",
    model: "",
    fuel: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-6">
        <h1 className="text-xl font-bold mb-6 text-center">مشخصات خودرو</h1>

        {/* پلاک */}
        <div className="flex justify-center gap-2 mb-6">
          <input
            name="plate1"
            value={form.plate1}
            onChange={handleChange}
            className="w-12 border rounded p-2 text-center"
            maxLength={2}
          />
          <input
            name="plate2"
            value={form.plate2}
            onChange={handleChange}
            className="w-12 border rounded p-2 text-center"
            maxLength={1}
          />
          <input
            name="plate3"
            value={form.plate3}
            onChange={handleChange}
            className="w-16 border rounded p-2 text-center"
            maxLength={3}
          />
          <input
            name="plate4"
            value={form.plate4}
            onChange={handleChange}
            className="w-16 border rounded p-2 text-center"
            maxLength={2}
          />
        </div>

        {/* مشخصات */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            name="brand"
            placeholder="برند خودرو"
            className="border rounded p-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="model"
            placeholder="تیپ خودرو"
            className="border rounded p-2"
            onChange={handleChange}
          />
          <select
            name="fuel"
            className="border rounded p-2"
            onChange={handleChange}
          >
            <option value="">نوع سوخت</option>
            <option value="بنزین">بنزین</option>
            <option value="دوگانه">دوگانه</option>
            <option value="گاز">گاز</option>
          </select>
          <input
            type="number"
            name="year"
            placeholder="سال ساخت"
            className="border rounded p-2"
            onChange={handleChange}
          />
        </div>

        {/* دکمه‌ها */}
        <div className="flex justify-between">
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 rounded bg-gray-300"
          >
            مرحله قبل
          </button>
          <button
            onClick={() => router.push("/third-party/step2")}
            className="px-4 py-2 rounded bg-blue-600 text-white"
          >
            تایید و ادامه
          </button>
        </div>
      </div>
    </div>
  );
}